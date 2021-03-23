import { createGlobalStyle } from 'styled-components';
import AvenirHeavy05 from '../assets/fonts/Avenir-Heavy-05.woff';
import AvenirRoman12 from '../assets/fonts/Avenir-Roman-12.woff';
import Background from '../assets/images/Background.png';

export default createGlobalStyle`
  @font-face {
    font-family: "AvenirHeavy";
    src: url(${AvenirHeavy05}) format("woff");
  }

  @font-face {
    font-family: "AvenirRoman";
    src: url(${AvenirRoman12}) format("woff");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  }

  ::-webkit-scrollbar{
    width:10px;
    background-color:	transparent;
  }
  ::-webkit-scrollbar-thumb{
    background-color:rgba(255, 255, 255, 0.1);
    border-radius:20px;
  }

  body {
    font-family: "AvenirRoman", monospace;
    font-size: 15px;
    color: #E1E1E6;
    background: url(${Background}) no-repeat center fixed;
    background-size:cover;
  }

  h1, h2, h3, h4, h5, h6, string {
    font-weight: 200;
  }

  button {
    cursor: pointer;
  }
`;
