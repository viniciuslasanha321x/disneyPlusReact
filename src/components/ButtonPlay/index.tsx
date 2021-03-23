import React, { PropsWithChildren, ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export type ButtonSecondaryVariants = 'withBackground' | 'withoutBackground';

type ButtonSecondaryProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonSecondaryVariants;
};

const ButtonPlay = ({
  variant = 'withoutBackground',
  children,
  ...rest
}: PropsWithChildren<ButtonSecondaryProps>) => {
  return (
    <Container variant={variant} {...rest}>
      {children}
    </Container>
  );
};

export default ButtonPlay;
