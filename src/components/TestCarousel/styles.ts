import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';

export const Container = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;

  .rec-carousel-item:focus {
    outline: none;
  }

  .rec-pagination {
    display: none;
  }

  .rec {
    height: 200px;
  }
`;

export const Content = styled.div`
  width: 100%;
`;

export const MoviesCarousel = styled(Carousel)``;
