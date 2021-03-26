import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  left: 15px;
  display: flex;
  flex-direction: column;
  width: 97%;
  height: 70%;
  background: transparent;
  margin: 40px 0 0 25px;
  word-break: break-all;

  @media (min-width: 2560px) {
    width: 93%;
    height: 40%;
    margin-left: 100px;
  }
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

  @media (min-width: 2560px) {
   font-size:30px;
  };

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
        padding: 9px 20px 0 0;
        font-weight: 600;
        text-align: start;

        @media (min-width: 1586px) {
          padding: 30px 20px 0 0;
        }

        @media (min-width: 3440px) {
          font-size: 30px;
          padding: 60px 60px 0 0;
        }
      }
    }
  }
`;

export const FilmInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
  margin-top: 15px;

  @media (min-width: 3440px) {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr;
  }
`;

export const FilmSummary = styled.div`
  @media (min-width: 2560px) {
    width: 1086px;
  }

  @media (max-width: 768px) {
    margin: 0 30px 0 0;
  }

  h3 {
    margin-left: 10px;
    font-size: 40px;

    @media (min-width: 2560px) {
      font-size: 65px;
    }
  }
  /* h2 {
    margin-left: 15px;
    font-size: 40px;

    @media (min-width: 2560px) {
      font-size: 160px;
    }
  } */

  p {
    font-size: 20px;
    margin-left: 10px;

    @media (min-width: 2560px) {
      font-size: 30px;
    }
  }
`;

export const AdditionalInformationMovie = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 500px;

  @media (min-width: 2560px) {
    max-width: none;
  }

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const ContentOne = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45px;

  @media (min-width: 3440px) {
    margin: -20px 0 0 30px;
  }

  p {
    height: 20px;
    color: rgb(202, 202, 202);

    @media (min-width: 2560px) {
      height: 35px;
      font-size: 25px;
      font-weight: 600;
    }
  }

  span {
    color: rgb(249, 249, 249);

    @media (min-width: 2560px) {
      height: 35px;
      font-size: 25px;
      font-weight: 600;
    }
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

  @media (min-width: 3440px) {
    margin-top: -20px;
  }

  @media (min-width: 2560px) {
    p {
      height: 35px;
      font-size: 25px;
      font-weight: 600;
    }
  }

  span {
    display: flex;
    justify-content: column;
    margin-bottom: 15px;

    @media (min-width: 2560px) {
      height: 35px;
      font-size: 25px;
      font-weight: 600;
    }
  }
`;
