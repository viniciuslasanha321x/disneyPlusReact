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
      <div className="teste">
        <SanCarousel
          slides={slides}
          autoPlay={4000}
          height="360px"
          slideSize="88%"
          focusSlide
          slideBorderRadius="10px"
          spaceBetweenSlides="10px"
        />
      </div>
      <div className="teste2">
        <SanCarousel
          slides={slides}
          autoPlay={4000}
          height="860px"
          slideSize="88%"
          focusSlide
          slideBorderRadius="10px"
          spaceBetweenSlides="10px"
        />
      </div>
    </Container>
  );
};

export default memo(Carousel);
