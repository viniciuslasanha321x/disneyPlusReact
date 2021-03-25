// Modules
import React, { useContext } from 'react';

// Assets
import DisneyImageLogo from '../../assets/images/LogoDisneyForBackground.png';
import VideoDisneyBackground from '../../assets/videos/BackgroundCastleDisneyVideo.mp4';
import BackgroundDisneyCastle from '../../assets/images/BackgroundDisneyCastle.png';

import Header from '../../components/Header';
import FilmsByBrand from '../../components/FilmsByBrand';
import TypesCarousel from '../../components/TypesCarousel';
import { CarouselContextCardDashboard } from '../../components/CarouselRoutesContextCardsDashboard';

import { ContainerCarouselFilms } from './styles';

const BrandDisneyFilmPage = () => {
  const { recommendedTendenciesImagesDashboard } = useContext(
    CarouselContextCardDashboard,
  );
  return (
    <>
      <Header />
      <FilmsByBrand
        videoUrl={VideoDisneyBackground}
        logoImg={DisneyImageLogo}
        altImg="Disney Image"
        backgroundImg={BackgroundDisneyCastle}
        altBackgroundImg="Background Disney Castle"
      />
      <ContainerCarouselFilms>
        <h4>Recomendados</h4>
        <TypesCarousel
          carouselImagesFilm={recommendedTendenciesImagesDashboard}
        />
        <h4>Recomendados</h4>
        <TypesCarousel
          carouselImagesFilm={recommendedTendenciesImagesDashboard}
        />
        <h4>Recomendados</h4>
        <TypesCarousel
          carouselImagesFilm={recommendedTendenciesImagesDashboard}
        />
        <h4>Recomendados</h4>
        <TypesCarousel
          carouselImagesFilm={recommendedTendenciesImagesDashboard}
        />
        <h4>Recomendados</h4>
        <TypesCarousel
          carouselImagesFilm={recommendedTendenciesImagesDashboard}
        />
        <h4>Recomendados</h4>
        <TypesCarousel
          carouselImagesFilm={recommendedTendenciesImagesDashboard}
        />
      </ContainerCarouselFilms>
    </>
  );
};

export default BrandDisneyFilmPage;
