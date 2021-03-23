import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import { Container, Content } from './styles';
import LoadingEffectCardBackground from '../../../assets/images/LoadingEffectCardBackground.png';

const breakPoints = [
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 600, itemsToShow: 3, itemsToScroll: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
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
        </Carousel>
      </Content>
    </Container>
  );
}

export default FilmCardShimmerEffect;
