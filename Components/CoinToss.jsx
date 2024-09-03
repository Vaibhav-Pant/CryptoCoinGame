import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Keyframe for faster flipping animation
const flip = keyframes`
  0% { transform: rotateY(0); }
  25% { transform: rotateY(360deg); }
  50% { transform: rotateY(720deg); }
  75% { transform: rotateY(1080deg); }
  100% { transform: rotateY(1440deg); }
`;

// Coin component styles
const CoinContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  perspective: 1000px;
`;

const Coin = styled.div`
  width: 100%;
  height: 100%;
  background: #ffd700;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  ${(props) =>
    props.isFlipping &&
    css`
      animation: ${flip} 2s ease;
    `}
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  backface-visibility: hidden;
`;

const Result = styled.div`
  position: absolute;
  top: -30px;
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #ffd500;
`;

export default function CoinToss({selectedSide, onResult, flipCoin }) {

  return (
    <CoinContainer>
      <Result>
        {
            flipCoin ? 
            onResult === "win" ? `Result : ${selectedSide}`
            : onResult === "lost" ? `Result : ${selectedSide}` : ""  
            : ""
        }
      </Result>
      <Coin isFlipping={flipCoin}>
        {!flipCoin ? 'Coin' : ""}
      </Coin>
    </CoinContainer>
  );
}
