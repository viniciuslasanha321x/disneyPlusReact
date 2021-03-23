// Modules
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import { Formik } from 'formik';

// Components & Others
import Input from '../../components/Input';
import Button from '../../components/Button';
import signInSchema from './validations';

// Assets
import animatedDisneyLogo from '../../assets/animations/animatedDisneyLogo.json';
import DisneyLogo from '../../assets/images/DisneyLogo.png';
import DisneyLogoAccount from '../../assets/images/DisneyLogoAccount.png';

// Stylized components
import {
  Container,
  Logo,
  Content,
  FormFormik,
  Footer,
  Divider,
  ImageDisneyAccount,
} from './styles';

interface FormValues {
  email: string;
  password: string;
}

const SignIn = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [
    isVisibleAnimatedDisneyLogo,
    setIsVisibleAnimatedDisneyLogo,
  ] = useState(true);

  const history = useHistory();

  useEffect(() => {
    setTimeout(() => setIsVisibleAnimatedDisneyLogo(false), 4000);
  }, []);

  const handleSubmitEmail = ({ email, password }: FormValues) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      setShowPasswordForm(true);
    }, 3000);
  };

  const handleSubmit = ({ email, password }: FormValues) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      history.push('/select-profile');
    }, 3000);
  };

  return (
    <Container>
      {isVisibleAnimatedDisneyLogo ? (
        <Lottie
          options={{
            autoplay: true,
            animationData: animatedDisneyLogo,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
          }}
          height={500}
          width={500}
        />
      ) : (
        <>
          <Logo src={DisneyLogo} alt="logo Disney" />

          <Content>
            <Formik
              initialValues={{ email: '', password: '' }}
              initialErrors={{ email: '', password: '' }}
              validationSchema={signInSchema}
              onSubmit={handleSubmit}
            >
              {({
                values: { email, password },
                errors,
                handleSubmit: submit,
                setErrors,
              }) =>
                !showPasswordForm ? (
                  <FormFormik>
                    <h1 className="FormFormik__title">
                      Digite seu e-mail para entrar
                    </h1>

                    <Input name="email" type="text" placeholder="E-mail" />

                    <Button
                      className="FormFormik__button"
                      type="button"
                      isLoading={isLoading}
                      onClick={() => {
                        if (errors.email === undefined) {
                          handleSubmitEmail({ email, password });
                          setErrors({});
                        } else submit();
                      }}
                    >
                      Continuar
                    </Button>

                    <div className="FormFormik__signup">
                      Não tem Disney+?
                      <Link to="/sign-up">Assine</Link>
                    </div>
                  </FormFormik>
                ) : (
                  <FormFormik className="animationShow">
                    <h1 className="FormFormik__title">Digite a senha</h1>

                    <Input
                      name="password"
                      type="password"
                      iconEye
                      placeholder="Senha"
                    />

                    <span className="FormFormik__lowerUppercase">
                      (maiúsculas e minúsculas)
                    </span>

                    <Button
                      className="FormFormik__button"
                      type="submit"
                      isLoading={isLoading}
                    >
                      Entrar
                    </Button>

                    <Link to="/" className="FormFormik__forgotPassword">
                      Esqueceu a senha?
                    </Link>
                  </FormFormik>
                )
              }
            </Formik>
          </Content>

          <Footer>
            <Divider />

            <ImageDisneyAccount src={DisneyLogoAccount} alt="Disney Account" />

            <span className="Footer__text">
              Com Esta Conta, Você Pode Acessar: Disney +, Star Wars, Marvel E
              Outras, Walt Disney Company Services.
            </span>
          </Footer>
        </>
      )}
    </Container>
  );
};

export default SignIn;
