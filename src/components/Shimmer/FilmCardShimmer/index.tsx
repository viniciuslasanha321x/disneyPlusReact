import React from 'react';
import { Container } from './styles';

function FilmCardShimmer() {
  return (
    <Container>
      <div className="card" />
      <div className="card" />
      <div className="card" />
      <div className="card" />
      <div className="card" />
    </Container>
  );
}

export default FilmCardShimmer;
