// Modules
import React from 'react';

import Header from '../../components/Header';
// Assets

import { SearchContainer } from './styles';

const SearchFilm = () => {
  return (
    <>
      <Header />
      <SearchContainer>
        <input
          placeholder="Pesquise por título, personagem ou gêneros"
          type="search"
        />
      </SearchContainer>
    </>
  );
};

export default SearchFilm;
