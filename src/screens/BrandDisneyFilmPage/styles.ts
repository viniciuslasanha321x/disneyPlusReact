import styled from 'styled-components';

export const ContainerCarouselFilms = styled.div`
  position: absolute;
  background: #000;
  transform: translateX(90%);
  transform: translateY(43%);
  width: 100%;

  h4 {
    position: relative;
    font-weight: 600;
    top: 20px;
    font-size: 20px;
    margin-left: 80px;
  }

  @media (max-width: 1440px) {
    transform: translateX(90%);
    transform: translateY(39%);
  }

  @media (max-width: 1280px) {
    transform: translateX(90%);
    transform: translateY(34%);
  }
  @media (max-width: 1024px) {
    transform: translateX(90%);
    transform: translateY(27%);
  }
  @media (max-width: 667px) {
    transform: translateX(90%);
    transform: translateY(18%);
  }
`;
