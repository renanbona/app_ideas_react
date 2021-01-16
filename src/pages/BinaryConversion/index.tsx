import React from 'react';
import { Title, NumberDiv, MainDiv, NumbersDiv, ConvertButton } from './styles';

const BinaryConversion: React.FC = () => {
  return(
    <>
      <MainDiv>
        <Title>Binary Conversion</Title>
        <NumbersDiv>
          {/* <BinaryField /> */}
          <NumberDiv>
            <input type="text" />
          </NumberDiv>
          <NumberDiv>
            Decimal
          </NumberDiv>
        </NumbersDiv>
        <ConvertButton type="submit">Convert</ConvertButton>
      </MainDiv>
    </>
  );
}

export default BinaryConversion;
