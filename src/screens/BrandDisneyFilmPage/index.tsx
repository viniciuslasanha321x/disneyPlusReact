// Modules
import React from 'react';

// Assets
import DisneyImageLogo from '../../assets/images/LogoDisneyForBackground.png';
import VideoDisneyBackground from '../../assets/videos/BackgroundCastleDisneyVideo.mp4';
import BackgroundDisneyCastle from '../../assets/images/BackgroundDisneyCastle.png';

import Header from '../../components/Header';
import FilmsByBrand from '../../components/FilmsByBrand';

const BrandDisneyFilmPage = () => {
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
    </>
  );
};

export default BrandDisneyFilmPage;
