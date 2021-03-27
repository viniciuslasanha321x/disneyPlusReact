import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 0 60px;
  padding: 0 30px;
  display: grid;
  justify-content: center;
  flex-direction: row;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 17px;

  @media (min-width: 2560px) {
    grid-template-columns: repeat(auto-fit, 350px);
  }

  @media (min-width: 3440px) {
    grid-template-columns: repeat(auto-fit, 550px);
    gap: 20px;
  }

  .card {
    place-content: center;
    border-radius: 13px;
    border: 2px solid rgb(52, 53, 63);
    background: rgb(35, 36, 48);
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
      rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
    width: 250px;
    height: 140px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    @media (min-width: 2560px) {
      width: 300px;
      height: 170px;
    }

    @media (min-width: 3440px) {
      width: 500px;
      height: 280px;
    }
  }
`;
