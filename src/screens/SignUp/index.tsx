// Modules
import React, { useState } from 'react';
import { Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';

// Components
import Input from '../../components/Input';
import Button from '../../components/Button';
import signUpSchema from './validations';

// Assets
import DisneyLogo from '../../assets/images/DisneyLogo.png';

// Stylized components
import {
  Container,
  Header,
  Logo,
  Content,
  FormFormik,
  TermsCard,
  AcceptNewsletter,
  CheckBox,
  UsedEmail,
} from './styles';

interface FormValues {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

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

      history.push('/dashboard');
    }, 3000);
  };

  return (
    <Container>
      <Header>
        <Logo src={DisneyLogo} alt="logo Disney" />
        <Link to="/">Entrar</Link>
      </Header>

      <Content>
        <Formik
          initialValues={{ email: '', password: '' }}
          initialErrors={{ email: '', password: '' }}
          validationSchema={signUpSchema}
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
                <p className="FormFormik__step">PASSO 1 DE 2</p>

                <h1 className="FormFormik__title">Digite o seu email</h1>

                <Input name="email" type="text" placeholder="E-mail" />

                <AcceptNewsletter>
                  <CheckBox>
                    <input className="CheckBox__element" type="checkbox" />
                  </CheckBox>

                  <span className="AcceptNewsletter__text">
                    Sim! Quero receber not??cias, ofertas especiais e outras
                    informa????es do Disney+ e das empresas do grupo Walt Disney.
                  </span>
                </AcceptNewsletter>

                <TermsCard>
                  <span className="TermsCard__text">
                    A Disney usar?? os seus dados para oferecer e dar suporte aos
                    servi??os, personalizar e melhorar a sua experi??ncia no
                    Disney+ e para enviar informa????es. Voc?? pode alterar as
                    prefer??ncias de comunica????o quando quiser. Podemos usar
                    esses dados conforme explica a nossa Pol??tica de
                    Privacidade, inclusive compartilh??-los com as Empresas do
                    grupo Walt Disney. Ao clicar em Continuar, voc?? confirma que
                    leu a nossa Pol??tica de Privacidade e os termos espec??ficos
                    aplic??veis ao Brasil.
                  </span>

                  <Button
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
                </TermsCard>
              </FormFormik>
            ) : (
              <FormFormik className="animationShow">
                <p className="FormFormik__step">PASSO 2 DE 2</p>

                <h1 className="FormFormik__title">Digite a senha</h1>

                <Input
                  name="password"
                  type="password"
                  iconEye
                  placeholder="Senha"
                />

                <span className="FormFormik__info">
                  Use no m??nimo seis caracteres (com distin????o entre mai??sculas
                  e min??sculas) com pelo menos um n??mero ou caractere especial.
                </span>

                <UsedEmail>
                  <p className="UsedEmail__info">
                    Voc?? vai usar este e-mail para entrar:
                  </p>

                  <p className="UsedEmail__address">{email}</p>
                </UsedEmail>

                <Button
                  type="submit"
                  isLoading={isLoading}
                  onClick={() => {
                    if (errors.password === undefined) {
                      handleSubmitEmail({ email, password });
                      setErrors({});
                    } else submit();
                  }}
                >
                  Entrar
                </Button>
              </FormFormik>
            )
          }
        </Formik>
      </Content>
    </Container>
  );
};

export default SignUp;
