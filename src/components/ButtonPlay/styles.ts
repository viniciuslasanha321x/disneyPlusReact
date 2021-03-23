import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { ButtonSecondaryVariants } from '.';

type ContainerProps = {
  variant: ButtonSecondaryVariants;
};

const variants = {
  withoutBackground: css`
    color: #fff;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid #fff;
    transition: all 0.2s ease-in-out;

    svg {
      path {
        fill: #fff;
      }
    }

    &:hover {
      border: 1px solid #77787d;
      background: #77787d;
      color: #000;

      svg {
        path {
          fill: #000;
        }
      }
    }
  `,

  withBackground: css`
    color: #000;
    background: #f9f9f9;
    border: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: ${shade(0.2, '#f9f9f9')};
    }
  `,
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  height: 57px;
  padding: 0 25px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  border-radius: 3px;
  transition: background-color 0.2s;

  @media (max-width: 960px) {
    margin-left: 25px;
    font-size: 10px;
    height: 35px;
    padding: 0 15px;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 20px;

    @media (max-width: 960px) {
      width: 15px;
      height: 15px;
    }
  }

  ${({ variant }) => variants[variant]}
`;
