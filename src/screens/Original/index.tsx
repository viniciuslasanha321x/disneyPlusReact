import React, { useState } from 'react';

import Header from '../../components/Header';

import OriginalLogo from '../../assets/images/Original.png';
import ImagemTeste1 from '../../assets/images/ImagemTeste1.jpg';
import ImagemTeste2 from '../../assets/images/ImagemTeste2.jpg';
import ImagemTeste3 from '../../assets/images/ImagemTeste3.jpg';
import ImagemTeste4 from '../../assets/images/ImagemTeste4.jpg';
import ImagemTeste5 from '../../assets/images/ImagemTeste5.jpeg';
import ImagemTeste6 from '../../assets/images/ImagemTeste6.jpg';
import ImagemTeste7 from '../../assets/images/ImagemTeste7.jpg';
import ImagemTeste8 from '../../assets/images/ImagemTeste8.jpg';
import ImagemTeste9 from '../../assets/images/ImagemTeste9.jpg';
import ImagemTeste10 from '../../assets/images/ImagemTeste10.jpg';

import { Container, HeaderLogo, FilmImages } from './styles';

const Originais: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleChangeLogoHeight = () => {
    if (window.scrollY >= 10) {
      return setIsScrolled(true);
    }
    return setIsScrolled(false);
  };

  window.addEventListener('scroll', handleChangeLogoHeight);
  return (
    <>
      <Header />
      <HeaderLogo isScrolled={isScrolled}>
        <img src={OriginalLogo} alt="logo Disney" />
      </HeaderLogo>
      <FilmImages>
        <img src={ImagemTeste1} alt="logo Disney" />
        <img src={ImagemTeste2} alt="logo Disney" />
        <img src={ImagemTeste3} alt="logo Disney" />
        <img src={ImagemTeste4} alt="logo Disney" />
        <img src={ImagemTeste5} alt="logo Disney" />
        <img src={ImagemTeste6} alt="logo Disney" />
        <img src={ImagemTeste7} alt="logo Disney" />
        <img src={ImagemTeste8} alt="logo Disney" />
        <img src={ImagemTeste9} alt="logo Disney" />
        <img src={ImagemTeste10} alt="logo Disney" />
      </FilmImages>
      <Container />
    </>
  );
};

export default Originais;
