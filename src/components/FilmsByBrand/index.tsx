// Modules
import React, { useState, useEffect, PropsWithChildren } from 'react';

import { IconLoading } from '../../assets/icons';

import {
  ContainerFilmsByBrands,
  ContentFilmsByBrand,
  ContainerBackground,
  TesteDiv,
} from './styles';

interface FilmProps {
  videoUrl: string;
  logoImg?: string;
  altImg?: string;
  backgroundImg: string;
  altBackgroundImg: string;
}

const FilmsByBrand = ({
  videoUrl,
  logoImg,
  altImg,
  backgroundImg,
  altBackgroundImg,
}: PropsWithChildren<FilmProps>) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisibleBackground, setIsVisibleBackground] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 100);
  }, []);

  const handleChangeBackground = () => {
    if (window.scrollY >= 2) {
      return setIsScrolled(true);
    }
    return setIsScrolled(false);
  };

  window.addEventListener('scroll', handleChangeBackground);

  return (
    // <>
    /* {isLoading ? (
        <ContainerFilmsByBrands>
          <div className="teste">
            <img
              className="Content__loading"
              src={IconLoading}
              alt="Icon Loading"
            />
          </div>
        </ContainerFilmsByBrands>
      ) : ( */
    <ContainerFilmsByBrands>
      <ContentFilmsByBrand isScrolled={isScrolled}>
        <img className="brandLogo_img" src={logoImg} alt={altImg} />
        {isVisibleBackground ? (
          <ContainerBackground>
            <video onEnded={() => setIsVisibleBackground(false)} autoPlay muted>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </ContainerBackground>
        ) : (
          <>
            <img
              className="background_img"
              src={backgroundImg}
              alt={altBackgroundImg}
            />
          </>
        )}
      </ContentFilmsByBrand>
    </ContainerFilmsByBrands>
    //   {/* )}
    // </> */}
  );
};

export default FilmsByBrand;
