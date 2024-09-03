---

# 🪙 Crypto Coin Flip Game

## Overview
The **Crypto Coin Flip Game** is a decentralized web application that allows users to engage in a coin flip game using cryptocurrency on the Ethereum blockchain. Users can connect their wallets, place bets, and potentially double their cryptocurrency if they win the coin flip. The game is currently deployed on the Sepolia testnet.

## Features
- **Blockchain Support**: Users can select Ethereum sepolia Testnet Currency to place bet.
- **Real-Time Betting**: Place bets and see the outcome in real-time.
- **Secure Transactions**: All transactions are securely processed via smart contracts.
- **Decentralized**: The game is fully decentralized, with all transactions and outcomes recorded on the blockchain.
- **Testnet Integration**: Use testnet tokens (e.g., SepoliaETH) to play without risking real cryptocurrency.

## Tech Stack
- **Frontend**: React.js (using Vite), Styled-components
- **Backend**: Node.js, Web3.js / Ethers.js
- **Smart Contracts**: Solidity, Hardhat for development, Alchemy for deployment
- **Blockchain**: Ethereum (Sepolia testnet)
- **Hosting**: Vercel

## Installation

### Prerequisites
- Node.js & npm installed
- MetaMask extension installed
- Alchemy API key (for interacting with the Ethereum blockchain)
- Sepolia testnet ETH (for placing bets)

### Clone the Repository
```bash
git clone https://github.com/Vaibhav-Pant/CryptoCoinGame.git
cd crypto-coin-flip-game
```

### Install Dependencies
```bash
npm install
```

### Setup Environment Variables
Create a `.env` file in the root directory and add the following:

```
VITE_CONTRACT_ADDRESS=your-contract-address
VITE_ETHERSCAN_API_KEY=your-etherscan-api-key
VITE_PRIVATE_KEY=your-private-key
VITE_SEPOLIA_URL=your-alchemy-api-key
```

### Running the Project
To start the project locally:
```bash
npm run dev
```
This will run the Vite development server. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Smart Contract Deployment
To deploy the smart contract to the Sepolia testnet:
1. Navigate to the `hardhat` directory:
   ```bash
   cd hardhat
   ```

2. Deploy the contract:
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

### Testing
You can test the smart contract with Hardhat:
```bash
npx hardhat test
```

## How to Play
1. **Connect Your Wallet**: Click the "Connect Wallet" button on the homepage.
2. **Check Balance**: Ensure you have SepoliaETH in your wallet.
3. **Place Your Bet**: Choose the amount you want to bet and select either "Heads" or "Tails".
4. **Flip the Coin**: Confirm the transaction in MetaMask and wait for the result.
5. **Win or Lose**: If you win, your wallet will automatically receive double the bet amount.

## Smart Contract Details
- **Language**: Solidity
- **Network**: Sepolia testnet
- **Functionality**:
  - `placeBet(uint amount, bool guess)`: Places a bet and flips the coin.
  - `checkWin()`: Checks if the user has won the bet.
  - `withdraw()`: Allows the owner to withdraw funds from the contract.

## Troubleshooting
- **Transaction Not Visible in MetaMask**: Internal transactions might not appear in MetaMask but can be seen on Etherscan.
- **Insufficient Balance**: Ensure you have enough SepoliaETH for placing a bet.
- **Contract Deployment Issues**: Double-check your Alchemy API key and network settings.

## Contributing
Contributions are welcome! Please fork this repository, create a new branch, and submit a pull request.

## Contact
For questions, feel free to open an issue.

---
