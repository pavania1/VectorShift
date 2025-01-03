// frontend/src/GlobalStyle.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f0f2f5;
  }

  .reactflow-wrapper {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;