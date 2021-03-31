import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import { api } from '../../services/api';
import { Favorite, FavoriteResponse } from '../../shared/interfaces';

import { Container, ContainerWatchList } from './styles';

const EditProfiles: React.FC = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([] as Favorite[]);

  async function reload() {
    const { data } = await api.get('favorites');
    console.log(data);

    setFavorites(data);
  }

  useEffect(() => {
    reload();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ContainerWatchList>
          {favorites.length ? (
            favorites.map((teste, index) => (
              <img key={index} src={teste.img} alt="teste" />
            ))
          ) : (
            <div className="ContainerAvatar__add">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 120 120"
              >
                <g fill="none" fillRule="evenodd" opacity=".2">
                  <circle
                    cx="60"
                    cy="60"
                    r="57.5"
                    stroke="#FFF"
                    strokeWidth="5"
                  />
                  <path
                    fill="#F9F9F9"
                    d="M63.626 57.254h17.739a3.5 3.5 0 0 1 3.5 3.5v.434a3.5 3.5 0 0 1-3.5 3.5h-17.74v17.739a3.5 3.5 0 0 1-3.5 3.5h-.433a3.5 3.5 0 0 1-3.5-3.5v-17.74H38.453a3.5 3.5 0 0 1-3.5-3.5v-.433a3.5 3.5 0 0 1 3.5-3.5h17.74V39.515a3.5 3.5 0 0 1 3.5-3.5h.433a3.5 3.5 0 0 1 3.5 3.5v17.739z"
                  />
                </g>
              </svg>
              <h3>Sua lista de observação está vazia</h3>
              <p>Content you add to your watchlist will appear here.</p>
            </div>
          )}
        </ContainerWatchList>
      </Container>
    </>
  );
};

export default EditProfiles;
