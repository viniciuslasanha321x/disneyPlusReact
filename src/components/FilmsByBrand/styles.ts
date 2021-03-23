import styled from 'styled-components';

interface BackgroundProps {
  isScrolled: boolean;
  color: string;
}

export const ContainerFilmsByBrands = styled.div<BackgroundProps>`
  position: relative;
  top: 0;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${({ color }) => color};
`;

export const ContentFilmsByBrand = styled.div<BackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .background_img {
    width: 100%;
    filter: ${props =>
      props.isScrolled ? 'brightness(65%)' : 'brightness(100%)'};
    transition: filter 400ms;
    opacity: 350px;
  }

  .brandLogo_img {
    position: absolute;
    max-width: 45%;
    z-index: 999;
  }

  video {
    width: 100%;
    filter: ${props =>
      props.isScrolled ? 'brightness(65%)' : 'brightness(100%)'};
    transition: filter 400ms;
  }
`;
