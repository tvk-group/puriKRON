const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("KronFairLaunch", function () {
  it("distributes 80/10/5/5 on launch", async function () {
    const [deployer, lp, eco, founder] = await ethers.getSigners();

    const Factory = await ethers.getContractFactory("KronFairLaunch");
    const factory = await Factory.deploy();
    await factory.waitForDeployment();

    const tx = await factory.launch("puriKRON", "PURIKRON", lp.address, eco.address, founder.address);
    const receipt = await tx.wait();

    const event = receipt.logs
      .map((log) => {
        try {
          return factory.interface.parseLog(log);
        } catch {
          return null;
        }
      })
      .find((e) => e && e.name === "FairLaunchDeployed");

    expect(event).to.not.equal(undefined);

    const token = await ethers.getContractAt("KronToken", event.args.token);
    const total = await token.totalSupply();

    expect(await token.balanceOf(lp.address)).to.equal((total * 8000n) / 10000n);
    expect(await token.balanceOf(event.args.ecosystemLock)).to.equal((total * 1000n) / 10000n);
    expect(await token.balanceOf(event.args.founderShortLock)).to.equal((total * 500n) / 10000n);
    expect(await token.balanceOf(event.args.founderLongLock)).to.equal((total * 500n) / 10000n);
  });
});
