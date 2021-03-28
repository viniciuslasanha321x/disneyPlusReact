import React from 'react';

import Header from '../../components/Header';

import VideoGroupWatch from '../../assets/videos/VideoGroupWatch.mp4';
import RatatouilleProfileImage from '../../assets/images/Profile.png';
import IconAddGroupWatchComponent from '../../assets/icons/IconAddGroupWatchComponent';
import ImageTest from '../../assets/images/ImagemTeste1.jpg';

import {
  Container,
  ContainerAvatar,
  ContainerVideoEffectProfile,
  ContainerOfSelectedFilms,
} from './styles';

const GroupWatch: React.FC = () => {
  return (
    <Container>
      <Header />
      <ContainerOfSelectedFilms>
        <h1>GroupWatch</h1>
        <img src={ImageTest} alt="Ratatouille Imagem" />
        <h2>Film Title</h2>
        <h3>t1 ep1 Nome do Episodio</h3>
        <p>
          Wanda e Visão tentam esconder seus poderes durante um jantar com o
          chefe de Visão e sua esposa.
        </p>
        <span>informações de categorias e classificação do filme</span>
      </ContainerOfSelectedFilms>
      <ContainerVideoEffectProfile>
        <video autoPlay loop muted>
          <source src={VideoGroupWatch} type="video/mp4" />
        </video>
      </ContainerVideoEffectProfile>
      <ContainerAvatar>
        <img src={RatatouilleProfileImage} alt="Ratatouille Imagem" />
        <button className="iconGroupWatch" type="button">
          <IconAddGroupWatchComponent />
        </button>
      </ContainerAvatar>
    </Container>
  );
};

export default GroupWatch;
