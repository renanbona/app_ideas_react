import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding: 40px 20px;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
  }
`;
