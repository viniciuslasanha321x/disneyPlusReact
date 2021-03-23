// Modules
import React, { PropsWithChildren, memo } from 'react';
import SanCarousel from 'sancarousel';

// Stylized components
import { Container } from './styles';

export type Slide = { link: string; img: string };

type CarouselProps = { slides: Slide[] };

const Carousel = ({ slides }: PropsWithChildren<CarouselProps>) => {
  return (
    <Container>
      <SanCarousel
        slides={slides}
        autoPlay={4000}
        height="360px"
        slideSize="88%"
        focusSlide
        slideBorderRadius="10px"
        spaceBetweenSlides="10px"
      />
    </Container>
  );
};

export default memo(Carousel);
