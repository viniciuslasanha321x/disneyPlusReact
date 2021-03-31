import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { uuid } from 'uuidv4';

import IconAddComponent from '../../assets/icons/IconAddComponent';
import IconGroupWatchComponent from '../../assets/icons/IconGroupWatchComponent';
import { api } from '../../services/api';

import { Container, ContentTooltip } from './styles';

interface FavoriteResponse {
  data: Favorite[];
}

interface Favorite {
  id: string;
  link: string;
  img: string;
}

const ButtonIconMovie: React.FC = ({ children }) => {
  const [isVisibleIconChecked, setIsVisibleIconChecked] = useState(true);
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);

  async function toggleButtonfilmFavorites() {
    const link = 'wandavision-page-film';
    const img =
      'https://live.staticflickr.com/65535/51063065127_71cbdf6fd9_t.jpg';

    const { data: favorites } = (await api.get(
      'favorites',
    )) as FavoriteResponse;

    console.log(favorites);

    const isFavorite = favorites.filter(favorite => favorite.link === link);
    // false
    // 0
    // null
    // undefined
    if (isFavorite.length) {
      console.log({ isFavorite: isFavorite[0] });

      const favoriteId = isFavorite[0].id;

      api.delete(`favorites/${favoriteId}`);
    } else {
      api.post('favorites', {
        id: uuid(),
        link,
        img,
      });
    }

    setIsVisibleIconChecked(!isVisibleIconChecked);
  }

  async function reload() {
    const link = 'wandavision-page-film';

    const { data: favorites } = (await api.get(
      'favorites',
    )) as FavoriteResponse;

    const isFavorite = favorites.filter(favorite => favorite.link === link);

    if (isFavorite.length) {
      setIsVisibleIconChecked(false);
    }
  }

  useEffect(() => {
    reload();
  }, []);

  return (
    <Container>
      <button
        className="iconAddMovie"
        type="button"
        onClick={toggleButtonfilmFavorites}
      >
        {isVisibleIconChecked ? <IconAddComponent /> : <>{children}</>}
      </button>
      <Link to="/group-watch">
        <button
          className="iconGroupWatch"
          type="button"
          onMouseEnter={() => setIsOpenTooltip(true)}
          onMouseLeave={() => setIsOpenTooltip(false)}
        >
          <IconGroupWatchComponent />
        </button>
      </Link>
      <ContentTooltip
        isVisible={isOpenTooltip}
        onMouseEnter={() => setIsOpenTooltip(true)}
        onMouseLeave={() => setIsOpenTooltip(false)}
      >
        <span className="tooltip__Text">
          Experimente o GroupWatch para curtir o Disney+ juntos, mesmo
          separados.
        </span>
      </ContentTooltip>
    </Container>
  );
};

export default ButtonIconMovie;
