// Modules
import React from 'react';

// Assets
import MarvelImageLogo from '../../assets/images/LogoMarvelForBackground.png';
import VideoMarvelBackground from '../../assets/videos/BackgroundMarvelVideo.mp4';
import BackgroundMarvel from '../../assets/images/BackgroundMarvel.png';

import Header from '../../components/Header';
import FilmsByBrand from '../../components/FilmsByBrand';

const BrandMarvelFilmPage = () => {
  return (
    <>
      <Header />
      <FilmsByBrand
        videoUrl={VideoMarvelBackground}
        logoImg={MarvelImageLogo}
        altImg="Marvel Image"
        backgroundImg={BackgroundMarvel}
        altBackgroundImg="Background Marvel"
      />
    </>
  );
};

export default BrandMarvelFilmPage;
