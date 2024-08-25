import React, { useState } from 'react';
import styled from 'styled-components';
import Popup from './Popup';



const BetAmountSelector = ({ maxAmount, onSubmit, choice, flipCoin, handlePlaceBet }) => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);




  // Handle amount change
  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) { // Allow only numbers and decimal point
      setAmount(value);
      setError('');
    } else {
      setError('Please enter a valid number.');
    }
  };


  const handlePlaceBetClick = () => {
    setIsPopupVisible(true);
  };

  const handleConfirm = () => {
    onSubmit(parseFloat(amount));
    setIsPopupVisible(false);
    // flipCoin();
    handlePlaceBet();
    // Proceed with flipping the coin and calling the smart contract
  };

  const handleCancel = () => {
    setIsPopupVisible(false);
  };


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const betAmount = parseFloat(amount);

    if (isNaN(betAmount) || betAmount <= 0) {
      setError('Please enter a valid amount.');
      return;
    }

    if (betAmount > maxAmount) {
      setError(`Bet amount cannot exceed ${maxAmount} SepoliaETH.`);
      return;
    }

    handlePlaceBetClick();
    // onSubmit(betAmount); // Pass the valid amount to the parent component
  };

  return (
    <AmountSelectorContainer>
      <Label htmlFor="betAmount">Enter Bet Amount (SepoliaETH):</Label>
      <AmountInput
        id="betAmount"
        type="number"
        step="0.0001"
        min="0"
        value={amount}
        onChange={handleChange}
        placeholder="0.0001"
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <SubmitButton onClick={handleSubmit}>Place Bet</SubmitButton>
      {isPopupVisible && (
        <Popup
          betAmount={amount}
          choice={choice}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </AmountSelectorContainer>
  );
};

export default BetAmountSelector;



// Container styling for the amount selector
const AmountSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #333; */
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  margin-top: 20px;
`;

// Label styling
const Label = styled.label`
  color: #ffd500;
  font-weight: bold;
  margin-bottom: 10px;
`;

// Input styling
const AmountInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #ffd500;
  border-radius: 5px;
  background-color: #222;
  color: #fff;
  font-size: 16px;
  text-align: center;
  outline: none;

  &::placeholder {
    color: #888;
  }
`;

// Error message styling
const ErrorMessage = styled.p`
  color: #e16880;
  font-size: 14px;
  margin: 2px;
`;

// Button styling
const SubmitButton = styled.button`
  background-color: #ffd500;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0c700;
  }
`;