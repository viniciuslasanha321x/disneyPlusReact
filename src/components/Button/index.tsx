// Modules
import React, { PropsWithChildren, ButtonHTMLAttributes, memo } from 'react';

// Assets
import { IconLoading } from '../../assets/icons';

// Stylized components
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button = ({
  isLoading,
  disabled,
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) => (
  <Container type="button" isLoading={isLoading} disabled={disabled} {...rest}>
    {isLoading ? (
      <img
        className="Container__loading"
        src={IconLoading}
        alt="Icon Loading"
      />
    ) : (
      children
    )}
  </Container>
);

export default memo(Button);
