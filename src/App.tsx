import React from 'react';
import { render } from 'react-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import CarouselRoutesContextDashboard from './components/CarouselRoutesContextDashboard';
import CarouselRoutesContextCardDashboard from './components/CarouselRoutesContextCardsDashboard';

const App: React.FC = () => (
  <CarouselRoutesContextDashboard>
    <CarouselRoutesContextCardDashboard>
      <Routes />
      <GlobalStyle />
    </CarouselRoutesContextCardDashboard>
  </CarouselRoutesContextDashboard>
);

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

render(<App />, mainElement);
