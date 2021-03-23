import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #12141f;
  height: 100vh;
`;

export const HeaderProfileContent = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px 0 30px;

  button {
    width: 143px;
    height: 50px;
    background-color: rgb(0, 114, 210);
    transition: 300ms;
    font-size: 15px;
    margin: 0;

    &:hover {
      background: ${shade(0.2, 'rgb(0, 114, 210)')};
    }
  }
`;

export const Logo = styled.img`
  width: 100%;
  width: 90px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100% - 170px);

  h1 {
    font-size: 30px;
    margin-top: 10px;
  }
`;

export const ContainerProfile = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Profile = styled.section`
  a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #fff;
  }

  & + section {
    margin-left: 30px;
  }

  h4 {
    cursor: pointer;
    margin-top: 15px;
    font-size: 20px;
  }
`;

export const ContainerAvatar = styled.div`
  background-color: #4e4d5b;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  border: 4px solid transparent;

  &:hover {
    transform: scale(1.1);
    border: 4px solid #fff;
  }

  svg {
    color: #fff;
    width: 60px;
    height: 60px;
  }

  img {
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    border-radius: 50%;

    &:hover {
      width: 100%;
      height: 100%;
    }
  }
`;
