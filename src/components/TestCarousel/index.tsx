import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import CarouselOfFilmsCategoriesShimmer from '../Shimmer/CarouselOfFilmsCategoriesShimmer';
import { Container, Content } from './styles';

export type Slide = { link: string; img: string };

interface CarouselImages {
  carouselImageListing?: Slide[];
  altListImages?: string;
}

const TesteCarousel: React.FC<CarouselImages> = ({
  carouselImageListing = [],
  altListImages,
}) => {
  if (!carouselImageListing.length) return <CarouselOfFilmsCategoriesShimmer />;

  // const containerRef = useRef<HTMLElement>(null);
  // useEffect(() => {
  //   let idt: number;
  //   function onResizeHandler() {
  //     if (idt) clearTimeout(idt);
  //     idt = setTimeout(() => {
  //       window.location.hash = `#${id1}`;
  //     }, 20);
  //   }
  //   window.addEventListener('resize', onResizeHandler);

  //   return () => {
  //     window.removeEventListener('resize', onResizeHandler);
  //   };
  // }, [id1]);

  // function handleGoNext() {
  //   containerRef.current!.scrollTo(999999, 0);
  // }
  // ref={containerRef}

  const breakPoints = [
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 600, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  return (
    <Container>
      <Content>
        <Carousel breakPoints={breakPoints} isRTL={false} pagination={false}>
          {carouselImageListing.map((img, index) => {
            return (
              <Item key={index}>
                <Link to={`/${img.link}`} key={index}>
                  <img src={img.img} alt={altListImages} />
                </Link>
              </Item>
            );
          })}
        </Carousel>
      </Content>
    </Container>
  );
};

export default TesteCarousel;
