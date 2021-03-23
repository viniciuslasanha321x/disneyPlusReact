// Modules
import React from 'react';

// Assets
import VideoPixarBackground from '../../assets/videos/BackgroundPixarVideo.mp4';
import BackgroundPixar from '../../assets/images/BackgroundPixar.png';

import Header from '../../components/Header';
import FilmsByBrand from '../../components/FilmsByBrand';

const BrandPixarFilmPage = () => {
  return (
    <>
      <Header />
      <FilmsByBrand
        videoUrl={VideoPixarBackground}
        backgroundImg={BackgroundPixar}
        altBackgroundImg="Background Pixar"
      />
    </>
  );
};

export default BrandPixarFilmPage;
