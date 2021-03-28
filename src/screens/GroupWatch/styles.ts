import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  background-color: #131214;
  overflow-x: hidden;
`;

export const ContainerVideoEffectProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }

  video {
    margin-left: 500px;
    width: 780px;

    @media (min-width: 2560px) {
      width: 1500px;
    }
  }
`;

export const ContainerAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  position: absolute;

  button {
    position: absolute;
    background: #fff;
    border: 1px solid #fff;
    padding: 6px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    left: 98%;
    top: 40%;

    @media (min-width: 2560px) {
      width: 120px;
      height: 120px;
    }
  }

  img {
    display: flex;
    justify-content: flex-end;
    align-self: end;
    align-items: end;
    width: 25%;
    border: 4px solid #0072d2;
    border-radius: 50%;
    margin-left: 500px;

    @media (min-width: 2560px) {
      width: 120%;
    }
  }
`;

export const ContainerOfSelectedFilms = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: absolute;
  margin: 30px 0 0 80px;
  width: 100%;

  @media (min-width: 2560px) {
    left: 200px;
  }

  @media (min-width: 3840px) {
    left: 600px;
  }

  img {
    margin-top: 30px;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    width: 400px;

    @media (max-width: 960px) {
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 2560px) {
      width: 700px;
    }

    @media (min-width: 3440px) {
      width: 800px;
    }
  }
  h1 {
    font-size: 45px;
  }

  h2 {
    font-weight: 600;
    font-size: 45px;
    margin: 30px 0 15px 0;
  }

  h3 {
    text-transform: uppercase;
    font-size: 25px;
    margin-bottom: 10px;
    font-weight: 600;
  }

  p {
    margin: 10px 0 10px 0;
    font-size: 20px;
    width: 600px;
  }

  span {
    margin: 10px 0 10px 0;
    font-size: 15px;
  }
`;
