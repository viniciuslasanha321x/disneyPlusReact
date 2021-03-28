import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import DisneyLogo from '../../assets/images/DisneyLogo.png';
import RatatouilleProfileImage from '../../assets/images/Profile.png';

import {
  Container,
  HeaderProfileContent,
  Logo,
  Content,
  ContainerProfile,
  Profile,
  ContainerAvatar,
} from './styles';

const SelectProfile: React.FC = () => {
  return (
    <Container>
      <HeaderProfileContent>
        <Logo src={DisneyLogo} alt="Disney Logo" />
        <Button type="button">EDITAR PERFIL</Button>
      </HeaderProfileContent>
      <Content>
        <h1>Quem Está Assistindo?</h1>

        <ContainerProfile>
          <Profile>
            <Link to="/dashboard">
              <ContainerAvatar>
                <img src={RatatouilleProfileImage} alt="Ratatouille Imagem" />
              </ContainerAvatar>
              <h4>Seu Perfil</h4>
            </Link>
          </Profile>

          <Profile>
            <ContainerAvatar>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </ContainerAvatar>
            <h4>Adicionar Perfil</h4>
          </Profile>
        </ContainerProfile>
      </Content>
    </Container>
  );
};

export default SelectProfile;
