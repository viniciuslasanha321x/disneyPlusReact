import styled, { keyframes } from 'styled-components';
import { Form } from 'formik';

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #12141f;
`;

export const Logo = styled.img`
  width: 150px;
  margin-top: 60px;
`;

export const Content = styled.main`
  width: 90%;
  max-width: 340px;
  margin: 30px 0;
`;

const animationShow = keyframes`
  from{
    transform: translateX(300px);
  } to{
    transform: translateX(0);
  }
`;

export const FormFormik = styled(Form)`
  &.animationShow {
    animation: ${animationShow} 300ms ease-in-out;
  }

  .FormFormik__title {
    font-size: 20px;
    font-family: 'AvenirHeavy', monospace;
    margin-bottom: 30px;
  }

  .FormFormik__button {
    margin-top: 20px;
  }

  .FormFormik__signup {
    font-size: 15px;
    color: rgb(202, 202, 202);
    margin-top: 24px;

    a {
      font-size: 15px;
      color: rgb(202, 202, 202);
      text-decoration: none;
      margin-left: 3px;

      &:hover {
        color: rgb(148, 208, 255);
        text-decoration: underline;
      }
    }
  }

  .FormFormik__lowerUppercase {
    font-size: 12px;
    color: rgb(202, 202, 202);
  }

  .FormFormik__forgotPassword {
    display: block;
    color: rgb(103, 189, 255);
    font-size: 15px;
    margin-top: 24px;
    text-decoration: none;

    &:hover {
      color: rgb(148, 208, 255);
      text-decoration: underline;
    }
  }
`;

export const Footer = styled.footer`
  width: 90%;
  max-width: 340px;

  .Footer__text {
    display: block;
    font-size: 10px;
    color: #a8a8a8;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.6px;
  background: #4f4e5c;
`;

export const ImageDisneyAccount = styled.img`
  width: 90px;
`;
