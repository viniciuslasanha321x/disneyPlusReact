// Modules
import React from 'react';

// Assets
import StarWarsImageLogo from '../../assets/images/LogoStarWarsForBackground.png';
import VideoStarWarsBackground from '../../assets/videos/BackgroundStarWarsVideo.mp4';
import BackgroundStarWars from '../../assets/images/BackgroundStarWars.png';

import Header from '../../components/Header';
import FilmsByBrand from '../../components/FilmsByBrand';

const BrandStarWarsFilmPage = () => {
  return (
    <>
      <Header />
      <FilmsByBrand
        videoUrl={VideoStarWarsBackground}
        logoImg={StarWarsImageLogo}
        altImg="Star Wars Image"
        backgroundImg={BackgroundStarWars}
        altBackgroundImg="Background Star Wars"
      />
    </>
  );
};

export default BrandStarWarsFilmPage;
