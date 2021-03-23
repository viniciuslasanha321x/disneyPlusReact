import React, { useState } from 'react';

import IconAddComponent from '../../assets/icons/IconAddComponent';
import IconGroupWatchComponent from '../../assets/icons/IconGroupWatchComponent';

import { Container, ContentTooltip } from './styles';

const ButtonIconMovie: React.FC = ({ children }) => {
  const [isVisibleIconChecked, setIsVisibleIconChecked] = useState(true);
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);

  return (
    <Container>
      <button
        className="iconAddMovie"
        type="button"
        onClick={() => setIsVisibleIconChecked(!isVisibleIconChecked)}
      >
        {isVisibleIconChecked ? <IconAddComponent /> : <>{children}</>}
      </button>
      <button
        className="iconGroupWatch"
        type="button"
        onMouseEnter={() => setIsOpenTooltip(true)}
        onMouseLeave={() => setIsOpenTooltip(false)}
      >
        <IconGroupWatchComponent />
      </button>
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
