// Modules
import React, { useState, FC } from 'react';

import Header from '../Header';

import { api } from '../../services/api';

// Assets
import Arrow from '../../assets/icons/Arrow.svg';

import {
  ContainerFilmes,
  Navigation,
  Title,
  DropdownCategoryMovies,
  ButtonOpenDropdown,
  List,
  ListItem,
} from './styles';

interface FilmsProps {
  categories: string[];
  title: string;
}

const FilmDropdownCategoriesPage: FC<FilmsProps> = ({ categories, title }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState('Destaques');

  return (
    <>
      <Header />
      <ContainerFilmes>
        <div className="Container__contentLeft">
          <Navigation>
            <Title>{title}</Title>
            <DropdownCategoryMovies>
              <ButtonOpenDropdown
                onMouseEnter={() => setIsOpenDropdown(true)}
                onMouseLeave={() => setIsOpenDropdown(false)}
              >
                <span>{activeItem}</span>
                <img src={Arrow} alt="Icon More" />
              </ButtonOpenDropdown>

              <List
                isVisible={isOpenDropdown}
                onMouseEnter={() => setIsOpenDropdown(true)}
                onMouseLeave={() => setIsOpenDropdown(false)}
              >
                {categories.map(item => (
                  <ListItem
                    isActived={item === activeItem}
                    onClick={() => setActiveItem(item)}
                  >
                    <span className="ListItem__Text">{item}</span>
                  </ListItem>
                ))}
              </List>
            </DropdownCategoryMovies>
          </Navigation>
        </div>
      </ContainerFilmes>
    </>
  );
};

export default FilmDropdownCategoriesPage;
