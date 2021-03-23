import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email obrigatório.')
    .strict()
    .lowercase('Email deve conter apenas letras minúsculas.')
    .email(
      'Endereço de e-mail inválido. Digite um e-mail válido neste formato: seunome@exemplo.com.',
    ),
  password: Yup.string()
    .required('Senha obrigatória')
    .min(6, 'No minimo 6 digitos'),
});

export default signUpSchema;
