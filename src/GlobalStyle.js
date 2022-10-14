import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    background: url('https://hyper-cloud.kr/static/images/background.jpg');
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
