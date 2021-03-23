import React from 'react';
import { render } from 'react-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import CarouselRoutesContext from './components/CarouselRoutesContext';

const App: React.FC = () => (
  <CarouselRoutesContext>
    <Routes />
    <GlobalStyle />
  </CarouselRoutesContext>
);

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

render(<App />, mainElement);
