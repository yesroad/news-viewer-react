import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './common.css';

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  *{
    outline: none;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
  }  
`;

export default GlobalStyles;
