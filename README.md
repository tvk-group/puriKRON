# puriKRON

puriKRON (PURIKRON) — Phase III demand-gated KRON Family memecoin spin-off.

- **Site:** https://www.purikron.com
- **Primary gateway:** https://www.ekron.network
- **Contact:** team@purikron.com
- **Status:** Demand-gated — Phase III (contract TBA)
- **Tokenomics:** 10B fixed supply · 80/10/5/5 on Base · fair launch only

## Structure

Mirrors the [eKRON](https://www.ekron.network) site architecture:

| Path | Purpose |
|------|---------|
| `/` | Homepage with consent gate, FAQ, family grid |
| `/verify/` | On-chain registry (via `kron-data.js`) |
| `/standard/` | KRON Fair Launch Standard |
| `/family/` | 7-token family roster |
| `/program/` | Launch program documentation |
| `/legal/` | Terms, privacy, cookies, risk |
| `/404.html` | Not found page |

## i18n

12 languages: en, de, fr, it, es, pt, tr, ru, ar, zh, ja, nl

Drop your exact logo PNG as `assets/logo/purikron-logo-source.png` and run `python3 assets/logo/build-from-source.py` to regenerate all sizes.

## Logo set

Brand assets live in [`assets/logo/`](assets/logo/). **32×32 SVG icon:**

https://raw.githubusercontent.com/tvk-group/puriKRON/main/assets/logo/icon-32.svg

See [`assets/logo/README.md`](assets/logo/README.md) for the full logo set.

## Deploy

Static site — deploy to Vercel or any static host. `vercel.json` included.
