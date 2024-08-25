// MetaMaskPopup.js
import React from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: aliceblue;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const MetaMaskPopup = () => {
  return (
    <PopupContainer>
      <PopupContent>
        <h2>MetaMask Not Installed</h2>
        <p>
          It looks like MetaMask is not installed in your browser. Please install MetaMask to proceed with the application.
        </p>
        <p>
          <a href="https://metamask.io/download.html" target="_blank" rel="noopener noreferrer">
            Download MetaMask
          </a>
        </p>
        <p>
          After installing, please make sure to connect to the Sepolia network:
          <ul>
            <li>Click on the MetaMask extension icon in your browser.</li>
            <li>Select the network dropdown at the top of the MetaMask popup.</li>
            <li>Choose "Sepolia Test Network" from the list.</li>
          </ul>
        </p>
        <Button onClick={() => window.location.reload()}>Refresh Page</Button>
      </PopupContent>
    </PopupContainer>
  );
};

export default MetaMaskPopup;
