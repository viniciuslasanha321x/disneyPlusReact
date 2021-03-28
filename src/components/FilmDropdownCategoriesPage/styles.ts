import styled, { css } from 'styled-components';

export const ContainerFilmes = styled.header`
  position: fixed;
  margin-top: 90px;
  width: 100%;
  height: 72px;
  transition: background 400ms;

  .Container__contentLeft {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export const Logo = styled.img`
  height: 48px;
`;

const AnimatedBorderBottom = css`
  position: relative;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  width: 180px;
  height: 100%;
  margin-left: 50px;

  > a {
    ${AnimatedBorderBottom}
  }

  a {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1.42px;

    span {
      margin-left: 8px;

      ${AnimatedBorderBottom}

      display: none;
    }
  }
`;

export const Title = styled.h1`
  color: rgb(249, 249, 249);
  font-size: 50px;
  font-weight: 600;
`;

export const DropdownCategoryMovies = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 32px;
`;

export const ButtonOpenDropdown = styled.div`
    background: rgb(19, 19, 19);
    border-radius:18px;
    height: 36px;
    width: 180px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    cursor: pointer;
    padding-left: 15px;

    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
`;

interface ListProps {
  isVisible: boolean;
}

export const List = styled.div<ListProps>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  width: 220px;
  position: absolute;
  top: 57px;
  background: rgb(19, 19, 19);
  border: 1px solid rgb(151, 151, 151, 0.34);
  border-radius: 8px;
  padding: 20px 0;
`;

interface ListItemProps {
  isActived?: boolean;
}

export const ListItem = styled.div<ListItemProps>`
  padding: 4px 15px;

  .ListItem__Text {
    padding-left: 10px;
    text-transform: uppercase;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
  }

  :hover {
    background: rgba(255, 255, 255, 0.2);

    .ListItem__Text {
      color: #fff;
    }
  }

  ${({ isActived }) =>
    isActived &&
    css`
      background: rgba(255, 255, 255, 0.2);

      .ListItem__Text {
        border-left: 1px solid #fff;
      }
    `}
`;
