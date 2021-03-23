import styled, { css, keyframes } from 'styled-components';

interface HeaderProps {
  isScrolled: boolean;
}

export const Container = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  height: 72px;
  display: flex;
  place-content: center space-between;
  padding: 0 35px;
  transition: all 300ms;
  background: ${props => (props.isScrolled ? '#090b12' : 'transparent')};

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

  ::after {
    position: absolute;
    bottom: -5px;
    left: 0;
    content: '';
    width: 0;
    height: 2px;
    transition: width 300ms;
  }

  &:hover {
    ::after {
      width: 100%;
      background: #fff;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 50px;

  @media (max-width: 1180px) {
    > a {
      ${AnimatedBorderBottom}
    }
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

    & + a {
      margin-left: 32px;
    }

    img {
      width: 24px;
      height: 20px;
    }

    span {
      margin-left: 8px;

      ${AnimatedBorderBottom}

      @media (max-width: 1180px) {
        display: none;
      }
    }
  }
`;

interface NavDropdown {
  isVisible: boolean;
}

export const NavDropdown = styled.div<NavDropdown>`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 32px;

  .NavDropdown__content {
    display: flex;
    align-items: center;

    @media (max-width: 1180px) {
      display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

      position: absolute;
      top: 60px;
      flex-direction: column;
      align-items: flex-start;
      padding: 20px;
      background: rgb(19, 19, 19);
      border: 1px solid rgb(151, 151, 151, 0.34);
      border-radius: 8px;

      a + a {
        margin: 15px 0 0 0;
      }

      a > span {
        display: block;
      }
    }
  }
`;

export const ButtonOpenDropdown = styled.div`
  display: none;

  @media (max-width: 1180px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 100%;

    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
`;

export const Profile = styled.section`
  display: flex;
  align-items: center;
`;

interface AvatarProps {
  nameIsVisible: boolean;
}

export const Avatar = styled.div<AvatarProps>`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 48px;
    height: 48px;
    margin-left: 16px;
  }

  @media (max-width: 1180px) {
    span {
      display: ${({ nameIsVisible }) => (nameIsVisible ? 'block' : 'none')};
    }
  }
`;

interface DropdownProfileProps {
  isVisible: boolean;
}

const animationDropdownProfile = keyframes`
  from {
    height: 0;
  } to {
    height: 388px;
  }
`;

export const DropdownProfile = styled.div<DropdownProfileProps>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  position: absolute;
  top: 0;
  right: 0;
  width: 240px;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgb(151, 151, 151, 0.34);
  border-radius: 8px;
  padding: 15px 20px;
  z-index: -1;
  overflow: hidden;

  animation: ${animationDropdownProfile} 500ms;

  ul {
    margin-top: 55px;
    border-top: 1px solid rgb(151, 151, 151, 0.34);

    li {
      list-style: none;
      padding: 10px 0;

      a {
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 16px;
        text-decoration: none;
        transition: color 300ms;

        img {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          padding: 5px;
          margin-right: 16px;
          transition: background 300ms;
        }

        :hover {
          color: rgba(255, 255, 255, 0.6);

          img {
            background: rgba(255, 255, 255, 0.4);
          }
        }
      }
    }
  }
`;
