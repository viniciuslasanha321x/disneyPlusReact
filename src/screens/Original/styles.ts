import styled from 'styled-components';

interface HeaderProps {
  isScrolled: boolean;
}

export const Container = styled.main`
  width: 100%;
`;

export const HeaderLogo = styled.nav<HeaderProps>`
  margin-top: 60px;
  background: transparent;
  width: 100%;
  height: 185px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${props =>
    props.isScrolled ? 'width:100%' : 'width 250ms ease-in-out 0s;'};

  img {
    width: 350px;
    transition: ${props =>
      props.isScrolled ? 'width:200px' : 'width 200ms ease-in-out 0s;'};
  }
`;

export const FilmImages = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-template-rows: 280px auto 280px;
  column-gap: 10px;
  row-gap: 15px;

  img {
    border: radius 4px;
    width: 90%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: 300ms;

    &:hover {
      border: 4px solid #fff;
      transition: 300ms;
      transform: scale(1.1);
    }
    }
  }
`;
