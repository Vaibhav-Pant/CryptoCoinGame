import { config } from 'dotenv';
import hardhat from 'hardhat';

config(); // Load environment variables

async function main() {
    // Set up the provider
    const { ethers } = hardhat;

    // Compile the contract
    const CoinFlip = await ethers.getContractFactory("CoinFlip");

    // Define the amount of Ether to send to the contract
    const initialFunding = ethers.utils.parseEther("0.1"); // 0.1 ETH

    // Deploy the contract and send Ether
    const coinFlip = await CoinFlip.deploy(0, {
        value: initialFunding
    });

    await coinFlip.deployed();

    console.log("CoinFlip deployed to:", coinFlip.address);
}

// Run the deployment script
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
