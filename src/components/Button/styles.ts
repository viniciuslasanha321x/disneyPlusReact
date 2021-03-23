import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isLoading?: boolean;
}

const animationLoading = keyframes`
  from{
    transform:rotateZ(0);
  }to{
    transform:rotateZ(360deg);
  }
`;

export const Container = styled.button<ContainerProps>`
  width: 100%;
  height: 50px;
  display: flex;
  place-content: center;
  padding: 0 16px;
  font-size: 20px;
  color: #ffffff;
  border-radius: 7px;
  border: none;
  transition: background-color 0.2s;

  background: ${({ isLoading }) =>
    isLoading ? shade(0.5, '#3070ca') : '#3070ca'};

  ${({ disabled }) =>
    disabled &&
    css`
      background: #a6a6a6;
    `}

  ${({ isLoading, disabled }) =>
    !isLoading &&
    !disabled &&
    css`
      :hover {
        background: ${shade(0.2, '#3070CA')};
      }
    `}

  .Container__loading {
    width: 30px;
    height: 30px;
    animation: ${animationLoading} 1s linear infinite;
  }
`;
