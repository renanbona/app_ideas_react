import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 45px;
  margin-bottom: 30px;
`;

export const BinaryField = styled.input`
  font-size: 30px;
  display: flex;
  height: 45px;
`;

export const NumbersDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 240px;
  width: 600px;
`;

export const NumberDiv = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items:center;

  span {
    margin-bottom: 20px;
    font-size: 30px;
  }

  input {
    height: 80px;
    font-size: 20px;
    text-align: center;
  }
`;

export const MainDiv = styled.div`
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  height: 600px;
`;

export const ErrorBox = styled.span`
  color: #ff0000;
  margin-top: -45px;
  font-size: 36px;
`;

export const ConvertButton = styled.button`
  text-transform: uppercase;
  color: #ffffff;
  height: 65px;
  background: #0400f8;
  width: 200px;
  cursor: pointer;
  border-radius: 8px;
  border: 0;

  &:hover {
    background: ${shade(0.2, '#0400f8')}
  }
`;