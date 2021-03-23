import styled, { keyframes } from 'styled-components';
import { Form } from 'formik';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #12141f;
`;

export const Header = styled.header`
  position: relative;
  width: 100%;

  a {
    position: absolute;
    right: 45px;
    top: 45px;
    text-decoration: none;
    color: rgb(202, 202, 202);

    &:hover {
      color: #fff;
    }
  }
`;

export const Logo = styled.img`
  display: block;
  width: 150px;
  margin: 60px auto 0 auto;
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
  .FormFormik__step {
    font-size: 10px;
  }

  .FormFormik__title {
    font-size: 20px;
    font-family: 'AvenirHeavy', monospace;
    margin-bottom: 20px;
  }

  .FormFormik__info {
    font-size: 10px;
    color: rgb(249, 249, 249);
    margin-top: 10px;
  }

  &.animationShow {
    animation: ${animationShow} 300ms ease-in-out;
  }
`;

export const AcceptNewsletter = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;

  .AcceptNewsletter__text {
    display: block;
    font-size: 12px;
    color: rgb(202, 202, 202);
  }
`;

export const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 15px;

  .CheckBox__element {
    position: relative;
    cursor: pointer;
    width: 20px;
    height: 20px;
  }

  .CheckBox__element:before {
    content: '';
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    background-color: #191622;
    border: 2px solid rgb(109, 117, 130);
    border-radius: 3px;
  }

  .CheckBox__element:checked:before {
    content: '';
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    background-color: #1e80ef;
    border: 2px solid transparent;
  }

  .CheckBox__element:checked:after {
    content: '';
    display: block;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    position: absolute;
    top: 2.75px;
    left: 6.5px;
  }
`;

export const TermsCard = styled.div`
  background-color: rgba(249, 249, 249, 0.1);
  border-radius: 8px;
  padding: 8px;
  margin-top: 15px;

  .TermsCard__text {
    display: block;
    font-size: 12px;
    color: rgb(202, 202, 202);
    margin-bottom: 10px;
    text-align: justify;
  }
`;

export const UsedEmail = styled.div`
  border-left: 2px solid rgb(168, 169, 173);
  padding-left: 10px;
  margin: 40px 0;

  .UsedEmail__info {
    font-size: 15px;
    color: rgb(168, 169, 173);
  }

  .UsedEmail__address {
    font-size: 17px;
    font-weight: 500;
  }
`;
