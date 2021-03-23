import styled from 'styled-components';

interface ContainerProps {
  error?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #32323e;
  border-radius: 7px;
  border: 2px solid ${({ error }) => (error ? 'rgb(255, 85, 76)' : '#4f4e5c')};
  padding: 0 15px;
  width: 100%;
  height: 55px;
  color: #c9c9c9;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #ffffff;
    height: 100%;

    & + input {
      margin-top: 8px;
    }
  }

  button {
    height: 100%;
    padding-left: 15px;
    background: transparent;
    outline: none;
    border: none;
  }
`;

export const Error = styled.span`
  display: block;
  font-size: 12px;
  color: rgb(255, 85, 76);
  line-height: 1.5;
  margin: 4px 0px 0px 4px;
`;
