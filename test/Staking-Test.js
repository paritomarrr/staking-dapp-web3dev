const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Staking", function () {
  this.beforeEach(async function () {
    [signer1, signer2] = await ethers.getSigners();
    Staking = await ethers.getContractFactory("Staking", signer1);
    staking = await Staking.deploy({
      value: ethers.utils.parseEther("10"),
    });
  });

  describe("deploy", function () {
    it("Should set owner", async function () {
      expect(await staking.owner()).to.equal(signer1.address);
    });
    it("Sets up tiers and lockPeriods", async function() {
      expect(await staking.lockPeriods(0)).to.equal(30)
      expect(await staking.lockPeriods(1)).to.equal(90)
      expect(await staking.lockPeriods(2)).to.equal(180)

      expect(await staking.tiers(30)).to.equal(700)
      expect(await staking.tiers(90)).to.equal(1000)
      expect(await staking.tiers(180)).to.equal(1200)
    })
  });


  describe("stakeEther", function () {
    it('transfers ethers', async function () {
      
    })
  })
});
