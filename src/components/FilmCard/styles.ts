import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
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
    width: 400px;
    height: 230px;
  }

  @media (min-width: 3440px) {
    width: 500px;
    height: 280px;
  }

  img {
    width: 100%;
    position: absolute;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 11px;
  }

  :hover {
    transform: scale(1.1);
    border: 2px solid #fff;

    @media (min-width: 2560px) {
      border: 4px solid #fff;
    }
  }
`;
