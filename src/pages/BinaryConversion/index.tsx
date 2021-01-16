import React, { useState } from 'react';
import { Title, NumberDiv, MainDiv, NumbersDiv, ConvertButton } from './styles';

const BinaryConversion: React.FC = () => {
  const [binaryNumber, setBinaryNumber] = useState('');

  function handleClick() {
    console.log(binaryNumber);
  }

  return(
    <>
      <MainDiv>
        <Title>Binary Conversion</Title>
        <NumbersDiv>
          {/* <BinaryField /> */}
          <NumberDiv>
            <input type="text" onChange={(e) => setBinaryNumber(e.target.value)}/>
          </NumberDiv>
          <NumberDiv>
            Decimal
          </NumberDiv>
        </NumbersDiv>
        <ConvertButton type="submit" onClick={handleClick}>Convert</ConvertButton>
      </MainDiv>
    </>
  );
}

export default BinaryConversion;
