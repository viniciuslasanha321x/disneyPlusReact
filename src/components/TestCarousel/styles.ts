import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';

export const Container = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;

  @media (min-width: 1700px) {
    height: 350px;
  }

  @media (min-width: 2560px) {
    height: 600px;
  }

  @media (min-width: 3100px) {
    height: 700px;
  }

  .rec-carousel-item:focus {
    outline: none;
  }

  .rec-pagination {
    display: none;
  }

  .rec-slider-container {
    height: 200px;
  }

  .rec {
    height: 200px;
    background-color: transparent !important;
    box-shadow: none !important;

    @media (min-width: 1700px) {
      color: #fff;
      font-size: 30px;
      height: 350px;
    }

    @media (min-width: 2560px) {
      color: #fff;
      font-size: 60px;
      height: 600px;
    }

    @media (min-width: 3100px) {
      height: 700px;
    }
  }

  @media (min-width: 2560px) {
    .rec-arrow-right {
      margin-right: 100px;
    }

    .rec-arrow-left {
      margin-left: 100px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
`;

export const MoviesCarousel = styled(Carousel)``;
