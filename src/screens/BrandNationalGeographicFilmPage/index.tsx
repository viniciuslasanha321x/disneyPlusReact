// Modules
import React from 'react';

// Assets
import NationalGeographicImageLogo from '../../assets/images/LogoNationalGeographicForBackground.png';
import VideoNationalGeographicBackground from '../../assets/videos/BackgroundNationalGeographicVideo.mp4';
import BackgroundNationalGeographic from '../../assets/images/BackgroundNationalGeographic.png';

import Header from '../../components/Header';
import FilmsByBrand from '../../components/FilmsByBrand';

const BrandNationalGeographicFilmPage = () => {
  return (
    <>
      <Header />
      <FilmsByBrand
        videoUrl={VideoNationalGeographicBackground}
        logoImg={NationalGeographicImageLogo}
        altImg="National Geographic Image"
        backgroundImg={BackgroundNationalGeographic}
        altBackgroundImg="Background National Geographic"
      />
    </>
  );
};

export default BrandNationalGeographicFilmPage;
