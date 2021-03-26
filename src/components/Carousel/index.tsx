// Modules
import React, { PropsWithChildren, memo } from 'react';
import SanCarousel from 'sancarousel';

// Stylized components

export type Slide = { link: string; img: string };

type CarouselProps = { slides: Slide[] };

const Carousel = ({ slides }: PropsWithChildren<CarouselProps>) => {
  return (
    <>
      <SanCarousel
        slides={slides}
        autoPlay={4000}
        height="390px"
        slideSize="88%"
        focusSlide
        slideBorderRadius="10px"
        spaceBetweenSlides="10px"
      />
    </>
  );
};

export default memo(Carousel);
