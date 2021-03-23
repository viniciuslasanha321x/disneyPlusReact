// Modules
import React, { useState, PropsWithChildren } from 'react';

import { ContainerFilmsByBrands, ContentFilmsByBrand } from './styles';

interface FilmProps {
  videoUrl: string;
  logoImg?: string;
  altImg?: string;
  backgroundImg: string;
  altBackgroundImg: string;
  color?: string;
}

const FilmsByBrand = ({
  videoUrl,
  logoImg,
  altImg,
  backgroundImg,
  altBackgroundImg,
  color = '#000',
}: PropsWithChildren<FilmProps>) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisibleBackground, setIsVisibleBackground] = useState(true);

  const handleChangeBackground = () => {
    if (window.scrollY >= 2) {
      return setIsScrolled(true);
    }
    return setIsScrolled(false);
  };

  window.addEventListener('scroll', handleChangeBackground);

  return (
    <ContainerFilmsByBrands color={color} isScrolled={isScrolled}>
      <ContentFilmsByBrand color={color} isScrolled={isScrolled}>
        {isVisibleBackground ? (
          <>
            <img className="brandLogo_img" src={logoImg} alt={altImg} />
            <video onEnded={() => setIsVisibleBackground(false)} autoPlay muted>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </>
        ) : (
          <>
            <img className="brandLogo_img" src={logoImg} alt={altImg} />
            <img
              className="background_img"
              src={backgroundImg}
              alt={altBackgroundImg}
            />
          </>
        )}
      </ContentFilmsByBrand>
    </ContainerFilmsByBrands>
  );
};

export default FilmsByBrand;
