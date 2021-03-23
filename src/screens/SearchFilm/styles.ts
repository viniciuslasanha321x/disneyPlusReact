import styled from 'styled-components';

export const SearchContainer = styled.main`
  margin-top: 75px;

  input {
    width: 100%;
    height: 100px;
    background: rgb(75, 78, 90);
    color: rgb(249, 249, 249);
    border: none;
    font-family: 'AvenirHeavy';
    font-size: 40px;
    padding-left: calc(3.5vw + 40px);
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    box-shadow: inset 0 0.5em 2em black;
  }

  input:focus {
    background: rgb(98, 102, 118);
  }

  @media (max-width: 1180px) {
    input {
      font-size: 24px;
      height: 60px;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }
`;
