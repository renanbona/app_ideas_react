import React, { useState } from 'react';
import { Title, NumberDiv, MainDiv, NumbersDiv, ConvertButton } from './styles';
import api from '../../services/api';

const BinaryConversion: React.FC = () => {
  const [binaryNumber, setBinaryNumber] = useState('');
  const [convertedNumber, setConvertedNumber] = useState('');

  async function handleClick() {
    const response = await api.get('binaries_conversion', {
      params: {
        binary: binaryNumber
      }
    })

    setConvertedNumber(response.data.converted_number);
  }

  return(
    <>
      <MainDiv>
        <Title>Binary Conversion</Title>
        <NumbersDiv>
          <NumberDiv>
            <input type="text" onChange={(e) => setBinaryNumber(e.target.value)}/>
          </NumberDiv>
          <NumberDiv>
            {convertedNumber}
          </NumberDiv>
        </NumbersDiv>
        <ConvertButton type="submit" onClick={handleClick}>Convert</ConvertButton>
      </MainDiv>
    </>
  );
}

export default BinaryConversion;
