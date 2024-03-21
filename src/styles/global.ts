import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    font-family: 'SUIT-Regular';
    font-size: 16px;
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
`;

export default GlobalStyle;