// Modules
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Assets
import DisneyLogo from '../../assets/images/DisneyLogo.png';
import ImgProfile from '../../assets/images/Profile.png';
import {
  IconHome,
  IconSearch,
  IconPlus,
  IconMore,
  IconStar,
  IconFilms,
  IconSeries,
  IconAdd,
} from '../../assets/icons';

import {
  Container,
  Logo,
  Navigation,
  NavDropdown,
  ButtonOpenDropdown,
  Profile,
  Avatar,
  DropdownProfile,
} from './styles';

const Header = () => {
  const [isOpenNavDropdown, setIsOpenNavDropdown] = useState(false);
  const [isOpenDropdownProfile, setIsOpenDropdownProfile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleChangeHeaderBackground = () => {
    if (window.scrollY >= 10) {
      return setIsScrolled(true);
    }
    return setIsScrolled(false);
  };

  window.addEventListener('scroll', handleChangeHeaderBackground);

  return (
    <Container isScrolled={isScrolled}>
      <div className="Container__contentLeft">
        <Logo src={DisneyLogo} alt="Disney Plus" />

        <Navigation>
          <Link to="/dashboard">
            <img src={IconHome} alt="Icon Home" />
            <span>Início</span>
          </Link>

          <Link to="/search-film">
            <img src={IconSearch} alt="Icon Search" />
            <span>Pesquisa</span>
          </Link>

          <Link to="/watchlist">
            <img src={IconPlus} alt="Icon Minha Lista" />
            <span>Minha Lista</span>
          </Link>

          <NavDropdown isVisible={isOpenNavDropdown}>
            <ButtonOpenDropdown
              onMouseEnter={() => setIsOpenNavDropdown(true)}
              onMouseLeave={() => setIsOpenNavDropdown(false)}
            >
              <img src={IconMore} alt="Icon More" />
            </ButtonOpenDropdown>

            <div
              className="NavDropdown__content"
              onMouseEnter={() => setIsOpenNavDropdown(true)}
              onMouseLeave={() => setIsOpenNavDropdown(false)}
            >
              <Link to="/original">
                <img src={IconStar} alt="Icon Originais" />
                <span>Originais</span>
              </Link>

              <Link to="/films">
                <img src={IconFilms} alt="Icon Films" />
                <span>Filmes</span>
              </Link>

              <Link to="/series">
                <img src={IconSeries} alt="Icon Series" />
                <span>Séries</span>
              </Link>
            </div>
          </NavDropdown>
        </Navigation>
      </div>

      <Profile
        onMouseEnter={() => setIsOpenDropdownProfile(true)}
        onMouseLeave={() => setIsOpenDropdownProfile(false)}
      >
        <Avatar nameIsVisible={isOpenDropdownProfile}>
          <span>Meu Perfil</span>
          <img src={ImgProfile} alt="Avatar meu perfil" />
        </Avatar>

        <DropdownProfile isVisible={isOpenDropdownProfile}>
          <ul>
            <li>
              <Link to="/">
                <img src={IconAdd} alt="Adicionar Perfil" />
                Adicionar perfil
              </Link>
            </li>

            <li>
              <Link to="/">Editar perfis</Link>
            </li>

            <li>
              <Link to="/">Configurações do Aplicativo</Link>
            </li>

            <li>
              <Link to="/">Conta</Link>
            </li>

            <li>
              <Link to="/">Ajuda</Link>
            </li>

            <li>
              <Link to="/">Sair</Link>
            </li>
          </ul>
        </DropdownProfile>
      </Profile>
    </Container>
  );
};

export default Header;
