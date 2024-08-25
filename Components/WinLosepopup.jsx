// Popup.js
import React from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupBox = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const Button = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const WinLosepopup = ({ isVisible, result, txHash, onClose, account}) => {
  if (!isVisible) return null;

  const etherscanUrl = `https://sepolia.etherscan.io/tx/${txHash}`;
  const userAcc = `https://sepolia.etherscan.io/address/${account}`;

  return (
    <PopupContainer>
      <PopupBox>
        <h2>{result === 'win' ? 'Congratulations!' : 'Sorry!'}</h2>
        <p>{result === 'win' ? 'You have won the bet!' : 'You have lost the bet.'}</p>
        <p>
          View your transaction on Etherscan: <a href={etherscanUrl} target="_blank" rel="noopener noreferrer">{etherscanUrl}</a>
        </p>
        <p>
            Check in your account: <a href={userAcc} target="_blank" rel="noopener noreferrer">{userAcc}</a>
        </p>
        <Button onClick={onClose}>Close</Button>
      </PopupBox>
    </PopupContainer>
  );
};

export default WinLosepopup;
