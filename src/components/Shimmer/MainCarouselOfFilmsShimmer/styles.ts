import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;

  .cardCarousel {
    place-content: center;
    border-radius: 13px;
    border: 2px solid rgb(52, 53, 63);
    background: rgb(35, 36, 48);
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
      rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
    width: 77%;
    height: 360px;
  }

  .teste {
    width: 120px;
    margin-left: 20px;
    border-radius: 13px;
    border: 2px solid rgb(52, 53, 63);
    background: rgb(35, 36, 48);
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
      rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
  }
`;
