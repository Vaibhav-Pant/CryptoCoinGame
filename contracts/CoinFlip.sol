// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoinFlip {
    address public owner;
    uint256 public minimumBet;
    
    enum Side { None, Heads, Tails }
    enum Result { None, Win, Lose }
    mapping(address => uint256) public bets;
    mapping(address => Side) public choices;

    event BetPlaced(address indexed user, uint256 amount, Side choice);
    event ResultEmitted(address indexed user, Result result, uint256 amount);
    event FundsWithdrawn(address indexed owner, uint256 amount);

    constructor(uint256 _minimumBet) payable {
        owner = msg.sender;
        minimumBet = _minimumBet;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    modifier hasSufficientFunds(uint256 amount) {
        require(address(this).balance >= amount, "Insufficient funds in contract");
        _;
    }

    function placeBet(Side choice) external payable {
        require(msg.value > 0, "Bet amount must be greater than 0");
        require(msg.value <= address(this).balance / 2, "Bet amount exceeds allowable limit");

        bets[msg.sender] = msg.value;
        choices[msg.sender] = choice;

        emit BetPlaced(msg.sender, msg.value, choice);

        // Immediately flip the coin and determine the result
        (Result result, uint256 amount) = flipCoin();
        emit ResultEmitted(msg.sender, result, amount);
    }

    function flipCoin() internal returns (Result, uint256) {
        uint256 random = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 2;
        Side result = random == 0 ? Side.Heads : Side.Tails;

        address player = msg.sender;
        uint256 betAmount = bets[player];

        if (choices[player] == result) {
            uint256 winnings = betAmount * 2;
            require(address(this).balance >= winnings, "Insufficient funds for winnings");
            payable(player).transfer(winnings);
            return (Result.Win, winnings);
        } else {
            payable(owner).transfer(betAmount);
            return (Result.Lose, betAmount);
        }
    }

    function getResult() external view returns (Side userChoice, Side coinResult, Result result) {
        require(bets[msg.sender] > 0, "No active bet found");
        userChoice = choices[msg.sender];
        require(userChoice != Side.None, "No choice was made");

        uint256 random = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 2;
        coinResult = random == 0 ? Side.Heads : Side.Tails;

        if (userChoice == coinResult) {
            result = Result.Win;
        } else {
            result = Result.Lose;
        }

        return (userChoice, coinResult, result);
    }

    function withdrawFunds(uint256 amount) external onlyOwner hasSufficientFunds(amount) {
        payable(owner).transfer(amount);
        emit FundsWithdrawn(owner, amount);
    }

    receive() external payable {}

    fallback() external payable {}
}
