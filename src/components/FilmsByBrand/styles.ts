import styled, { keyframes } from 'styled-components';

interface BackgroundProps {
  isScrolled: boolean;
}

interface ContainerProps {
  isLoading?: boolean;
}

const animationLoading = keyframes`
  from{
    transform:rotateZ(0);
  }to{
    transform:rotateZ(360deg);
  }
`;

export const TesteDiv = styled.div`
  /* background-size: cover; */
`;

export const ContainerFilmsByBrands = styled.div<ContainerProps>`
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;

  .teste {
    position: absolute;
    top: 340px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${animationLoading} 1s linear infinite;

    .Container__loading {
      width: 150px;
      height: 150px;
    }
  }
`;

export const ContentFilmsByBrand = styled.div<BackgroundProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .background_img {
    width: 100%;
    filter: ${props =>
      props.isScrolled ? 'brightness(65%)' : 'brightness(100%)'};
    transition: filter 400ms;
    opacity: 350px;
  }

  .brandLogo_img {
    position: absolute;
    width: 45%;
    z-index: 999;
  }

  video {
    width: 100%;
    filter: ${props =>
      props.isScrolled ? 'brightness(65%)' : 'brightness(100%)'};
    transition: filter 400ms;
  }
`;

export const ContainerBackground = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
