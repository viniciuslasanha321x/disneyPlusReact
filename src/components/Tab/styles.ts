import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  left: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  background: transparent;
  margin-top: 100px;
  word-break: break-all;
`;

export const BlocTabs = styled.div`
  background: transparent;
  display: flex;
`;

type TabButtonProps = {
  isFocused: boolean;
};

export const TabButton = styled.button<TabButtonProps>`
  text-align: start;
  text-transform: uppercase;
  font-size: 20px;
  color: #b3b3b3;
  border: transparent;
  background: transparent;
  padding: 15px;
  cursor: pointer;
  box-sizing: content-box;
  position: relative;
  outline: none;
  appearance: none;

  ${({ isFocused }) =>
    isFocused &&
    css`
      color: #fff;
    `}
  }

  ::after {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    content: '';
    height: 2px;

    ${({ isFocused }) =>
      isFocused &&
      css`
        width: 100%;
        background: #fff;
      `}
  }

  &:hover{
    color: #fff;
  }

  @media (max-width: 600px) {
   font-size:15px;
  };

`;

export const ContentTabs = styled.div`
  flex-grow: 1;

  .containerContentTabs {
    .content {
      display: none;
    }

    .active-content {
      background: transparent;
      padding: 20px 0 20px 5px;
      width: 100%;
      height: 100%;
      display: block;

      h2 {
        font-weight: 600;
        text-align: start;
        padding: 30px 0 30px 10px;
      }
    }
  }
`;

export const FilmInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;

  @media (max-width: 768px) {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr;
  }
`;

export const FilmSummary = styled.div`
  h2 {
    font-size: 40px;
  }
  p {
    font-size: 20px;
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    margin: 0 30px 0 0;
  }
`;

export const AdditionalInformationMovie = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 500px;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const ContentOne = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45px;

  p {
    height: 20px;
    color: rgb(202, 202, 202);
  }

  span {
    color: rgb(249, 249, 249);
  }

  .release {
    margin-bottom: 20px;
  }

  .genre {
    margin-bottom: 20px;
  }
`;

export const ContentTwo = styled.div`
  margin-top: 45px;

  span {
    display: flex;
    justify-content: column;
    margin-bottom: 10px;
  }
`;
