# puriKRON — Hardhat deploy guide (first time)

This folder deploys **puriKRON** on **Base** using the official KRON Fair Launch Program.

**Coming from Remix?** Hardhat is the same idea — compile Solidity, deploy with a wallet — but the steps run in your terminal instead of a browser UI. One command deploys the token and all timelocks.

---

## What Hardhat does (vs Remix)

| Remix | Hardhat |
|-------|---------|
| Browser UI | Terminal + config files |
| Click "Deploy" | Run `npm run deploy:base-sepolia` |
| Contracts in editor tabs | Contracts in `program/contracts/` |
| MetaMask injected | Same MetaMask key, stored in `.env` |
| Manual copy addresses | Script prints + saves `deploy-output.json` |

---

## Folder layout

```
program/
├── contracts/          ← Solidity (same as Remix files)
│   ├── KronToken.sol
│   ├── KronTimelock.sol
│   └── KronFairLaunch.sol
├── scripts/
│   └── deploy.js       ← runs deploy + launch()
├── test/
│   └── KronFairLaunch.test.js
├── .env.example        ← template (copy to .env)
├── hardhat.config.js   ← networks: Base, Base Sepolia
└── package.json        ← npm scripts
```

---

## Phase 0 — Install tools (one time)

### 0.1 Node.js

Hardhat needs **Node.js 18+**.

1. Open https://nodejs.org
2. Download the **LTS** installer
3. Install with defaults
4. Open a **new** terminal and check:

```bash
node --version
npm --version
```

You should see version numbers (e.g. `v22.x`, `10.x`).

### 0.2 Get the code

If you use Git:

```bash
git clone https://github.com/tvk-group/puriKRON.git
cd puriKRON/program
```

Or download the repo as ZIP and open the `program` folder in your terminal.

---

## Phase 1 — Install dependencies

In the `program` folder:

```bash
cd program
npm install
```

**What this does:** Downloads Hardhat, OpenZeppelin contracts, and test tools into `node_modules/` (like Remix fetching imports).

**Expected:** finishes without errors in 1–2 minutes.

---

## Phase 2 — Compile (like Remix “Compile”)

```bash
npm run compile
```

**What this does:** Builds bytecode from `contracts/*.sol`. Output goes to `artifacts/` and `cache/`.

**Success looks like:**

```
Compiled 3 Solidity files successfully
```

If you see errors, fix them before continuing (usually import or Solidity version).

---

## Phase 3 — Run tests (optional but recommended)

```bash
npm test
```

**What this does:** Deploys on a **local fake blockchain** inside your computer and checks the 80/10/5/5 split. No real ETH, no real network.

**Success:** `1 passing`

---

## Phase 4 — Create your `.env` file

**Never commit or share `.env`.**

```bash
cp .env.example .env
```

Open `program/.env` in a text editor and set:

### 4.1 `DEPLOYER_PRIVATE_KEY`

This is the **Genesis / Deployer** wallet private key:

- Expected address: `0xc282390c7eee86628Bd73c472f0ebf453CaB740b`
- In MetaMask: Account menu → account details → **Show private key**
- Paste **without** `0x` prefix issues — Hardhat accepts with or without `0x`

**Security:**

- Only use on a machine you trust
- Never paste in Discord, email, or GitHub
- `.env` is gitignored

### 4.2 Wallet addresses (already in `.env.example`)

For **mainnet**, keep the published puriKRON addresses:

| Variable | Address |
|----------|---------|
| `LP_WALLET` | `0xa5eD5A8B85c9AB7F808B3bD78ee436DEc25ecdD6` |
| `ECOSYSTEM_BENEFICIARY` | `0x172e02190e65Fa5f5C5224Dc9d8664E25Cb78809` |
| `FOUNDER_BENEFICIARY` | `0x6bB7054DB758bd197Aa15547F45773eb44bD33Ff` |

### 4.3 Token name

Already set:

```
TOKEN_NAME=puriKRON
TOKEN_SYMBOL=PKRON
```

---

## Phase 5 — Testnet first (Base Sepolia)

**Always test on Sepolia before mainnet.**

### 5.1 Add Base Sepolia to MetaMask

- Network name: `Base Sepolia`
- RPC URL: `https://sepolia.base.org`
- Chain ID: `84532`
- Currency: `ETH`
- Explorer: `https://sepolia.basescan.org`

### 5.2 Get test ETH

Search “Base Sepolia faucet” and send test ETH to your **deployer** address (`0xc282…740b`).

### 5.3 Use test wallets on Sepolia (important)

For the **first** Sepolia run, temporarily change `.env` to **your own MetaMask test addresses** (not mainnet LP/eco/founder), so you don’t tie test tokens to production wallets.

Example for a dry run:

```env
LP_WALLET=0xYourTestAddress1
ECOSYSTEM_BENEFICIARY=0xYourTestAddress2
FOUNDER_BENEFICIARY=0xYourTestAddress3
```

### 5.4 Deploy on Sepolia

```bash
npm run deploy:base-sepolia
```

**What happens step by step:**

1. Hardhat reads `.env` and connects to Base Sepolia
2. Uses your private key as the signing wallet
3. Deploys `KronFairLaunch` factory contract
4. Calls `launch("puriKRON", "PKRON", lp, eco, founder)`
5. In **one transaction**, creates:
   - PKRON token
   - 3 timelock contracts
   - Sends 8B to LP, locks 1B + 500M + 500M
6. Prints all addresses and writes `deploy-output.json`

### 5.5 Verify on Sepolia BaseScan

1. Open the **Tx hash** from the terminal on [sepolia.basescan.org](https://sepolia.basescan.org)
2. Open the **token** address → check total supply 10,000,000,000
3. Open **LP wallet** → should hold 8,000,000,000 PKRON
4. Open each **timelock** → should hold locked amounts

---

## Phase 6 — Mainnet deploy (Base)

Only after Sepolia looks correct.

### 6.1 Fund Genesis with real Base ETH

Send **~0.01–0.05 ETH** on **Base mainnet** to:

`0xc282390c7eee86628Bd73c472f0ebf453CaB740b`

### 6.2 Restore official wallets in `.env`

Set `LP_WALLET`, `ECOSYSTEM_BENEFICIARY`, and `FOUNDER_BENEFICIARY` back to the published puriKRON addresses (see `.env.example`).

### 6.3 Deploy

```bash
npm run deploy:base
```

Save the full terminal output and `deploy-output.json`.

### 6.4 After deploy — update the website

Send the deploy output (addresses only, no keys) to your team. The verify page needs:

| Field | From deploy output |
|-------|-------------------|
| Token contract | `token` |
| Ecosystem row | `ecosystemLock` (timelock address) |
| Founder 6M row | `founderShortLock` |
| Founder 12M row | `founderLongLock` |
| LP row | `lpWallet` (unchanged) |

---

## Phase 7 — Verify contracts on BaseScan (optional)

1. Create API key: https://basescan.org/myapikey
2. Add to `.env`: `BASESCAN_API_KEY=...`
3. Use Hardhat verify plugin for the token contract (factory is optional)

---

## Phase 8 — Add liquidity

1. From **LP wallet** (`0xa5eD…ecdD6`), approve tokens on your DEX
2. Add liquidity with the **8B** allocation
3. Announce only from **www.purikron.com**

---

## Troubleshooting

| Error | Fix |
|-------|-----|
| `Missing DEPLOYER_PRIVATE_KEY` | Create `program/.env` from `.env.example` |
| `Deployer wallet has 0 ETH` | Fund deployer on the correct network |
| `insufficient funds` | Add more ETH for gas |
| `nonce too low` | Wait for pending txs or reset account in MetaMask |
| Wrong network | Sepolia = `deploy:base-sepolia`, Mainnet = `deploy:base` |
| `KronFairLaunch: zero lp` | Check wallet addresses in `.env` |

---

## Quick command reference

```bash
cd program
npm install          # once
npm run compile      # after contract changes
npm test             # local sanity check
npm run deploy:base-sepolia   # testnet
npm run deploy:base           # mainnet
```

---

## Official puriKRON wallets (reference)

| Role | Address |
|------|---------|
| Genesis / Deployer | `0xc282390c7eee86628Bd73c472f0ebf453CaB740b` |
| LP | `0xa5eD5A8B85c9AB7F808B3bD78ee436DEc25ecdD6` |
| Ecosystem | `0x172e02190e65Fa5f5C5224Dc9d8664E25Cb78809` |
| Founder | `0x6bB7054DB758bd197Aa15547F45773eb44bD33Ff` |
| OPS (not in launch) | `0xb45c8268ACf64D1146395Eba74B4cA12A24350FA` |

---

**Next step for you:** run Phase 1 (`cd program && npm install`) and tell me when it finishes or if you hit an error.
