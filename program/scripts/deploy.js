const fs = require("fs");
const path = require("path");
const hre = require("hardhat");

/**
 * Deploy KronFairLaunch factory and launch puriKRON (or any KRON Family token).
 *
 * Required in program/.env:
 *   DEPLOYER_PRIVATE_KEY
 *   LP_WALLET
 *   ECOSYSTEM_BENEFICIARY
 *   FOUNDER_BENEFICIARY
 */
async function main() {
  if (!process.env.DEPLOYER_PRIVATE_KEY) {
    throw new Error(
      "Missing DEPLOYER_PRIVATE_KEY in program/.env — copy .env.example to .env and fill it in."
    );
  }

  const [deployer] = await hre.ethers.getSigners();
  const lpWallet = process.env.LP_WALLET;
  const ecosystemBeneficiary = process.env.ECOSYSTEM_BENEFICIARY;
  const founderBeneficiary = process.env.FOUNDER_BENEFICIARY;
  const tokenName = process.env.TOKEN_NAME || "puriKRON";
  const tokenSymbol = process.env.TOKEN_SYMBOL || "PURIKRON";
  const expectedDeployer = process.env.EXPECTED_DEPLOYER;

  if (!lpWallet || !ecosystemBeneficiary || !founderBeneficiary) {
    throw new Error("Set LP_WALLET, ECOSYSTEM_BENEFICIARY, and FOUNDER_BENEFICIARY in program/.env");
  }

  console.log("\n=== puriKRON Fair Launch Deploy ===\n");
  console.log("Network:", hre.network.name);
  console.log("Deployer:", deployer.address);
  if (expectedDeployer && deployer.address.toLowerCase() !== expectedDeployer.toLowerCase()) {
    console.warn("\n⚠️  WARNING: Deployer does not match EXPECTED_DEPLOYER in .env");
    console.warn("   Expected:", expectedDeployer);
    console.warn("   Got:     ", deployer.address);
    console.warn("   Continue only if this is intentional.\n");
  }
  console.log("LP Wallet:", lpWallet);
  console.log("Ecosystem Beneficiary:", ecosystemBeneficiary);
  console.log("Founder Beneficiary:", founderBeneficiary);
  console.log("Token:", tokenName, `(${tokenSymbol})`);

  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log("Deployer ETH balance:", hre.ethers.formatEther(balance), "ETH");
  if (balance === 0n) {
    throw new Error("Deployer wallet has 0 ETH. Fund it with Base ETH for gas before deploying.");
  }

  console.log("\n1/2 Deploying KronFairLaunch factory...");
  const Factory = await hre.ethers.getContractFactory("KronFairLaunch");
  const factory = await Factory.deploy();
  await factory.waitForDeployment();
  const factoryAddr = await factory.getAddress();
  console.log("   Factory:", factoryAddr);

  console.log("\n2/2 Calling launch() — creates token + 3 timelocks + distributes 10B tokens...");
  const tx = await factory.launch(
    tokenName,
    tokenSymbol,
    lpWallet,
    ecosystemBeneficiary,
    founderBeneficiary
  );
  console.log("   Tx hash:", tx.hash);
  const receipt = await tx.wait();
  console.log("   Confirmed in block:", receipt.blockNumber);

  const event = receipt.logs
    .map((log) => {
      try {
        return factory.interface.parseLog(log);
      } catch {
        return null;
      }
    })
    .find((e) => e && e.name === "FairLaunchDeployed");

  if (!event) {
    throw new Error("FairLaunchDeployed event not found — check the transaction on BaseScan.");
  }

  const result = {
    network: hre.network.name,
    chainId: Number((await hre.ethers.provider.getNetwork()).chainId),
    deployer: deployer.address,
    factory: factoryAddr,
    token: event.args.token,
    lpWallet: event.args.lpWallet,
    lpAmount: hre.ethers.formatEther(event.args.lpAmount),
    ecosystemLock: event.args.ecosystemLock,
    ecosystemAmount: hre.ethers.formatEther(event.args.ecosystemAmount),
    founderShortLock: event.args.founderShortLock,
    founderShortAmount: hre.ethers.formatEther(event.args.founderShortAmount),
    founderLongLock: event.args.founderLongLock,
    founderLongAmount: hre.ethers.formatEther(event.args.founderLongAmount),
    ecosystemBeneficiary,
    founderBeneficiary,
    tokenName,
    tokenSymbol,
    txHash: tx.hash,
    deployedAt: new Date().toISOString()
  };

  console.log("\n=== Fair Launch Complete ===\n");
  console.log("TOKEN CONTRACT:     ", result.token);
  console.log("LP wallet:          ", result.lpWallet, "|", result.lpAmount, "PURIKRON");
  console.log("Ecosystem timelock: ", result.ecosystemLock, "|", result.ecosystemAmount, "PURIKRON");
  console.log("Founder 6M lock:    ", result.founderShortLock, "|", result.founderShortAmount, "PURIKRON");
  console.log("Founder 12M lock:   ", result.founderLongLock, "|", result.founderLongAmount, "PURIKRON");
  console.log("\nSave this output. Update www.purikron.com verify page with token + timelock addresses.");

  const outPath = path.join(__dirname, "..", "deploy-output.json");
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2));
  console.log("\nWritten to:", outPath);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
