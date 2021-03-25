import styled from 'styled-components';

interface BackgroundProps {
  isScrolled: boolean;
}

export const ContainerWandavisionPageFilm = styled.div<BackgroundProps>`
  position: relative;

  /* .featuredVertical {
    width: 100%;
    background: linear-gradient(to top, rgb(26, 29, 41) 10%, transparent 30%);

    @media (min-width: 1280px) {
      height: 100vh;
    }
  }

  .featuredHorizontal {
    width: 100%;
    background: linear-gradient(to right, rgb(26, 29, 41) 2%, transparent 100%);

    @media (min-width: 1280px) {
      height: 100vh;
    }
  } */

  .background_img {
    position: absolute;
    background: no-repeat;
    width: 100%;
    z-index: -999;
    filter: ${props =>
      props.isScrolled ? 'brightness(78%)' : 'brightness(100%)'};
    transition: filter 400ms;
    opacity: 350px;
  }

  .tabInformationMovie {
    overflow: hidden;
  }
`;

export const FilmInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  .logoFilm_img {
    margin-top: 130px;
    width: 35%;

    @media (min-width: 2560px) {
      margin: 300px 0 0 100px;
      width: 20%;
    }

    @media (min-width: 3440px) {
      margin: 600px 0 0 100px;
      width: 20%;
    }

    @media (max-width: 650px) {
      margin-top: 80px;
    }
  }

  .containerButton {
    display: flex;
    justify-content: start;
    width: 550px;

    @media (min-width: 2560px) {
      margin-left: 100px;
    }
  }

  .genreMovie {
    margin-right: 45px;
  }
`;

export const IconLottieAnimation = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  @media (max-width: 960px) {
    width: 20px;
    height: 20px;
  }
`;

export const InfoFilm = styled.div`
  max-width: 800px;
  margin: 0 30px 0 30px;
  font-family: 'AvenirRoman';
  font-size: 20px;

  @media (min-width: 2560px) {
    margin-left: 130px;
  }

  .genreMovie {
    margin: 15px 0 15px 0;
    font-size: 15px;
  }
`;
