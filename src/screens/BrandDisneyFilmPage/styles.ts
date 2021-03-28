import styled from 'styled-components';
import BackgroundTest from '../../assets/images/BackgroundTest.png';

export const ContainerCarouselFilms = styled.div`
  width: 100%;
  background-image: url(${BackgroundTest});
  background-size: cover;

  h4 {
    position: relative;
    font-weight: 600;
    top: 20px;
    font-size: 20px;
    margin-left: 80px;
  }
`;
