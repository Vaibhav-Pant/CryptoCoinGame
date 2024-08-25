import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const PopupContainer = styled.div`
  background: #2c2c2c;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  color: #ffd500;
  margin-bottom: 20px;
`;

const Details = styled.p`
  color: #fff;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #ffd500;
  color: #2c2c2c;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ffbb00;
  }
`;

const Popup = ({ betAmount, choice, onConfirm, onCancel }) => {
  return (
    <Overlay>
      <PopupContainer>
        <Title>Confirm Your Bet</Title>
        <Details>Bet Amount: {betAmount} SepoliaETH</Details>
        <Details>Choice: {choice}</Details>
        <ButtonContainer>
          <Button onClick={onConfirm}>Place Bet</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </ButtonContainer>
      </PopupContainer>
    </Overlay>
  );
};

export default Popup;
