import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import { Container, Content } from './styles';
import LoadingEffectCardBackground from '../../../assets/images/LoadingEffectCardBackground.png';

const breakPoints = [
  { width: 375, itemsToShow: 1, itemsToScroll: 1 },
  { width: 536, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 964, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1366, itemsToShow: 5, itemsToScroll: 5 },
  { width: 1580, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1720, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1800, itemsToShow: 5, itemsToScroll: 5 },
  { width: 1920, itemsToShow: 5, itemsToScroll: 5 },
  { width: 2560, itemsToShow: 5, itemsToScroll: 5 },
  { width: 3440, itemsToShow: 6, itemsToScroll: 6 },
  { width: 3840, itemsToShow: 8, itemsToScroll: 8 },
];
function FilmCardShimmerEffect() {
  return (
    <Container>
      <Content>
        <Carousel breakPoints={breakPoints} isRTL={false} pagination={false}>
          <Item>
            <img
              src={LoadingEffectCardBackground}
              alt="card background loading effect"
            />
          </Item>
          <Item>
            <img
              src={LoadingEffectCardBackground}
              alt="card background loading effect"
            />
          </Item>
          <Item>
            <img
              src={LoadingEffectCardBackground}
              alt="card background loading effect"
            />
          </Item>
          <Item>
            <img
              src={LoadingEffectCardBackground}
              alt="card background loading effect"
            />
          </Item>
          <Item>
            <img
              src={LoadingEffectCardBackground}
              alt="card background loading effect"
            />
          </Item>

          <Item>
            <img
              src={LoadingEffectCardBackground}
              alt="card background loading effect"
            />
          </Item>

          <Item>
            <img
              src={LoadingEffectCardBackground}
              alt="card background loading effect"
            />
          </Item>
        </Carousel>
      </Content>
    </Container>
  );
}

export default FilmCardShimmerEffect;
