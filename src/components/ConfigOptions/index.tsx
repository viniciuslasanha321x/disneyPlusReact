import React, { HTMLAttributes } from 'react';

import IconSelected from '../../assets/icons/IconSelected.svg';

import { Container } from './styles';

interface ConfigProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  subtitle: string;
  isActivated: boolean;
}

const ConfigOptions: React.FC<ConfigProps> = ({
  title,
  subtitle,
  isActivated,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <div className="Container__header">
        <span className="header__title">{title}</span>

        <div className="icon">
          {isActivated && <img src={IconSelected} alt="Icon Selected" />}
        </div>
      </div>

      <p className="Container__subtitle">{subtitle}</p>
    </Container>
  );
};

export default ConfigOptions;
