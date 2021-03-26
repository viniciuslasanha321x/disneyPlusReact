import styled from 'styled-components';

export const MainCarouselOfFilmsDashboard = styled.div`
  margin-top: 80px;
`;

export const FilmCardContent = styled.div`
  margin: 30px 0 60px;
  padding: 0 30px;
  display: grid;
  justify-content: center;
  flex-direction: row;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 17px;

  @media (min-width: 2560px) {
    grid-template-columns: repeat(auto-fit, 350px);
  }

  @media (min-width: 3440px) {
    grid-template-columns: repeat(auto-fit, 550px);
    gap: 20px;
  }
`;

export const ContainerCarouselFilms = styled.div`
  h4 {
    position: relative;
    font-weight: 600;
    font-size: 20px;
    margin: 60px 60px 0 90px;

    @media (min-width: 2560px) {
      font-size: 30px;
    }
  }
`;
