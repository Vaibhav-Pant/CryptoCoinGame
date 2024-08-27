import React, { useState } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import UserDetail from "../Components/UserDetails.js";
import Buttons from "../Components/Buttons.jsx"
import BetAmountSelector from "../Components/BetAmount.jsx";
import CoinToss from "../Components/CoinToss.jsx";
import CoinFlipABI from "../abis/CoinFlip.json"; 
import WinLosepopup from '../Components/WinLosepopup.jsx'



export default function HomePage() {

  const { balance, account } = UserDetail();

  const [selectedSide, setSelectedSide] = useState("Heads");
  const [betAmount, setBetAmount] = useState(0);
  const [flipCoin, setFlipCoin] = useState(false);

  const [result, setResult] = useState('');
  const [txHash, setTxHash] = useState('');
  const [WinLosepopupVisible, setPopupVisible] = useState(false);



  const handleSliderChange = (newChoice) => {
    setSelectedSide(newChoice); // Update the choice based on user interaction
  };

  const handleBetAmountSubmit = (amount) => {
    setBetAmount(amount);
  };

  const handleCoinFlipping = (value) => {
    setFlipCoin(value);
  };

  const closeWinLosePopup = () => {
    setPopupVisible(false);
    setResult('');
    setTxHash('');
    setBetAmount(0);
  };

  const handlePlaceBet = async () => {
    setFlipCoin(true);
    try {
      const contractAddress = `${import.meta.env.VITE_CONTRACT_ADDRESS}`;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, CoinFlipABI, signer);

      // const sideAsBoolean = selectedSide === "Heads" ? 1 : 0;
      const choiceEnumValue = selectedSide === "Heads" ? 1 : 2;      
      const gasEstimate = await contract.estimateGas.placeBet(choiceEnumValue, { value: 10000 });
      
      const tx = await contract.placeBet(choiceEnumValue, {
        value: ethers.utils.parseEther(betAmount.toString()),
        gasLimit: gasEstimate
      });
      
      await tx.wait(); 
      // console.log('Transaction sent:', tx);

    
      const betResult = await contract.getResult();

      console.log("BetResult: ", betResult[2]);
      setResult(betResult[2] == 1 ? 'win' : 'lost');
      setPopupVisible(true);
      setTxHash(tx.hash);

    } catch (error) {
      console.error('Error placing bet:', error);
      alert('Error placing bet:', error);
      setResult('Error placing bet');
    } finally {
      setFlipCoin(false);
    }
  };


  return (
    <Container>
      <Heading>Coin Flip Game</Heading>
      <TopBar>
        <div className="boxes">
          <div className="box">
            <label htmlFor="address"> Account Address</label>
            <div>{account}</div>
          </div>
          <div className="box">
            <label htmlFor="address"> Current Balance</label>
            <div>{balance} SepoliaETH</div>
          </div>
        </div>
      </TopBar>
      <div className="choose">
        <BetAmountSelector maxAmount={balance} onSubmit={handleBetAmountSubmit} choice={selectedSide} flipCoin={() => setFlipCoin(!flipCoin)} handlePlaceBet={handlePlaceBet} />
        <Buttons onChange={handleSliderChange} />
      </div>

      <CoinToss onResult={result} selectedSide={selectedSide} flipCoin={flipCoin} setFlipCoin={handleCoinFlipping} />

      <WinLosepopup
        isVisible={WinLosepopupVisible}
        result={result}
        txHash={txHash}
        onClose={closeWinLosePopup}
        account = {account}
      />

    </Container>
  )
}



const Container = styled.div`

  background-color: #343d40;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* align-items: center; */


  .choose{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 20px auto;
    width: 100%;
  }


`
const Heading = styled.div`

margin: 20px auto;
font-size: 48px;
color: #ffd500;
font-weight: bold;

`

const TopBar = styled.div`
width: 80%;
margin: 20px auto;
padding: 10px 0px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
flex-direction: column;
gap: 10px;
color: aliceblue;

/* .user{
  font-size: 24px;
  font-weight: bold;
  color: #ffd500;
  margin: 0 auto;
} */

.boxes{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* justify-content: space-between; */
  /* gap: 20px; */
}

.box{
  border: 0.5px solid aliceblue;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #2f8ec1;
  font-size: 18px;

}

label{
  font-size: 20px;
  font-weight: 700;
  color: #ffd500;
}

`;