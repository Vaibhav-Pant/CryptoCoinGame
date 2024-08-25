require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config(); 

module.exports = {
  solidity: "0.8.18", 
  networks: {
    sepolia: { 
      url: `https://eth-sepolia.g.alchemy.com/v2/${import.meta.env.VITE_SEPOLIA_URL}`, 
      accounts: [`0x${import.meta.env.VITE_PRIVATE_KEY}`], 
    },
  },  
  etherscan: {
    apiKey: `${import.meta.env.VITE_ETHERSCAN_API_KEY}`,
  },
};
