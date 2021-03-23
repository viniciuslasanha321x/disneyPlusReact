import React from 'react';

import TesteCarousel from '../TestCarousel';

export type Slide = { link: string; img: string };

interface PropsTabMovie {
  carouselImagesFilm?: Array<{
    link: string;
    img: string;
  }>;
}

const TypesCarousel = ({ carouselImagesFilm }: PropsTabMovie) => {
  return (
    <>
      <TesteCarousel carouselImageListing={carouselImagesFilm} />
    </>
  );
};

export default TypesCarousel;
