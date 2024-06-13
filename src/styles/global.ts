import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    font-family: 'SUIT-Regular';
    @media screen and (min-width: 1601px){ *{font-size:16px} }
    @media screen and (min-width: 1024px) and (max-width: 1600px) { *{font-size:14px} }
    @media screen and (min-width: 769px) and (max-width: 1023px) { *{font-size:12px} }
    @media screen and (max-width: 768px) { *{font-size:10px} }
    }
    @font-face {
      font-family: 'SUIT-Regular';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
      }
      body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    overflow-x: hidden;
    }
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
      }
      
      /* Firefox */
      input[type=number] {
        -moz-appearance: textfield;
      }
        
        


`;

export default GlobalStyle;
