import React, { useState } from 'react';
import { Title, NumberDiv, MainDiv, NumbersDiv, ConvertButton, ErrorBox } from './styles';
import api from '../../services/api';

const BinaryConversion: React.FC = () => {
  const [binaryNumber, setBinaryNumber] = useState('');
  const [convertedNumber, setConvertedNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleClick() {
    await api.get('binaries_conversion', {
      params: {
        binary: binaryNumber
      }
    }).then(response => {
      setConvertedNumber(response.data.converted_number);
      setErrorMessage('');
    })
    .catch(err => {
      setErrorMessage(err.response.data.message);
    })
  }

  return(
    <>
      <MainDiv>
        <Title>Binary To Decimal Converter</Title>
        <NumbersDiv>
          <NumberDiv>
            <span>Binary Input</span>
            <input type="text" onChange={(e) => setBinaryNumber(e.target.value)}/>
          </NumberDiv>
          <NumberDiv>
            <span>Decimal Output</span>
            <input type="text" disabled value={convertedNumber}/>
          </NumberDiv>
        </NumbersDiv>
        <ErrorBox>{errorMessage}</ErrorBox>
        <ConvertButton type="submit" onClick={handleClick}>Convert</ConvertButton>
      </MainDiv>
    </>
  );
}

export default BinaryConversion;
