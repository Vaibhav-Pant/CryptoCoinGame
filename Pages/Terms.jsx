import React from 'react';
import styled from 'styled-components';

const Terms = ({ setTerms }) => {


  return (
    <Outer>
    <TermsContainer>
      <Title>Coin Flip Game - Terms & Conditions</Title>
      <SubTitle>Important Information</SubTitle>
      <Text>This is a beta version of the Coin Flip game. We are using the SepoliaETH test network and its currency. This is not a real game and does not involve real currency.</Text>
      <Text>Before you start playing, make sure you have a MetaMask account with some SepoliaETH balance. If you don’t have SepoliaETH, you can use a faucet to get some testnet credits.</Text>
      <List>
        <ListItem>The game is purely for testing purposes.</ListItem>
        <ListItem>You must have MetaMask installed and connected to the Sepolia test network.</ListItem>
        <ListItem>Ensure your MetaMask wallet has some SepoliaETH balance.</ListItem>
        <ListItem>If you need SepoliaETH, you can get it from <a href="https://sepolia-faucet.pk910.de/" target="_blank" rel="noopener noreferrer">this faucet</a>.</ListItem>
      </List>
      <SubTitle>Game Rules</SubTitle>
      <List>
        <ListItem>The game allows you to place a bet on heads or tails.</ListItem>
        <ListItem>If you win, you receive double the amount you bet. You can see this in the Internal Transaction on Etherscan website. It will not display in your MetaMask as it does not show internal transactions.</ListItem>
        <ListItem>If you lose, the bet amount goes to the contract owner.</ListItem>
      </List>
      <ConsentButton onClick={setTerms}>I Understand and Accept. <br/> Connect to your Metamask</ConsentButton>
    </TermsContainer>
    </Outer>

  );
};

export default Terms;


const Outer = styled.div`
width: 100vw;
height: 100vh;
background-color: #343d40;
`
const TermsContainer = styled.div`
  background-color: #343d40;
  color: #ffffffc1;
  /* color: #ffffffc1; */
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  margin: 0px auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  /* color: #f39c12; */
  color: aliceblue;
  text-decoration: underline;
  `;

const SubTitle = styled.h2`
  margin-bottom: 15px;
  color: aliceblue;
  /* color: #f39c12; */
`;

const Text = styled.p`
  line-height: 1.6;
  margin-bottom: 15px;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;

  a{
    color: #248ed4;
  }
`;

const ConsentButton = styled.button`
  /* background-color: #3893d0; */
  background-color: #e9efefc5;
  color: #121212;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    /* background-color: #e67e22; */
    /* background-color: #2180df; */
  }
`
;