// Modules
import React, { PropsWithChildren, memo } from 'react';
import SanCarousel from 'sancarousel';

// Stylized components
import { Container, Title } from './styles';

type Slide = { link: string; img: string };

type CarouselFilmsProps = {
  slides: Slide[];
  title?: string;
};

const CarouselFilms = ({
  slides,
  title,
}: PropsWithChildren<CarouselFilmsProps>) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <SanCarousel
        slides={slides}
        height="145px"
        slideSize="20%"
        dots={false}
        focusSlide
        spaceBetweenSlides="10px"
        slideBorderRadius="4px"
      />
    </Container>
  );
};

export default memo(CarouselFilms);
