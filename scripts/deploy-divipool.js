const hre = require("hardhat");
const loadJsonFile = require("load-json-file");

const { ethers } = hre;
const { parseEther } = ethers.utils;

async function main() {

  const Divipool = await ethers.getContractFactory("DIVIPOOL");
  const divipool = await Divipool.deploy();
  await divipool.deployed();
  console.log("divipool deployed to:", divipool.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
