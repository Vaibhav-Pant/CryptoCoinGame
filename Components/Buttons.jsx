import React, { useState } from 'react';
import styled from 'styled-components';

// Container for the slider
const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 200px;
  height: 40px;
  background-color: #333; /* Dark background for slider */
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`;

// The sliding button itself
const SliderButton = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: ${props => props.active ? '#ffd500' : ''}; /* Active color */
  color: white;
  transition: transform 0.3s ease, background-color 0.3s ease;
  border-radius: 20px;
  transform: ${props => props.active ? 'translateX(100%)' : 'translateX(0)'};
`;

// The label for each side
const Label = styled.div`
  position: relative;
  z-index: 1;
  width: 50%;
  text-align: center;
  line-height: 40px;
  background-color: ${props => props.active ? '#ffd500' : ''}; 
  color: #a066e8;
  font-weight: bold;
  transition: color 0.3s ease;
`;

const Slider = ({ onChange }) => {
  const [active, setActive] = useState(false);
  const newChoice = active ? 'Heads' : 'Tails';
  const handleClick = () => {
    setActive(!active);
    onChange(newChoice);
  };

  return (
    <SliderContainer onClick={handleClick}>
      <SliderButton active={active} />
      <Label active={!active}>Heads</Label>
      <Label active={active}>Tails</Label>
    </SliderContainer>
  );
};

export default Slider;
