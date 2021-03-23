import styled from 'styled-components';

import WandaVisionImageBackground from '../../assets/images/BackgroundWandaVision.png';

export const ContainerWandavisionPageFilm = styled.div`
  position: relative;
  width: 100%;
  background: #000;
  background: url(${WandaVisionImageBackground}) no-repeat;
  background-size: 100%;
  height: 100vh;

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
    margin-top: 100px;
    width: 35%;
  }

  .containerButton {
    display: flex;
    justify-content: start;
    width: 550px;
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

  .genreMovie {
    margin: 15px 0 15px 0;
    font-size: 15px;
  }
`;
