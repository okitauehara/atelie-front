import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as S from '../styles/LoginSignUpStyle';
import logo from '../assets/logo.png';

function Login() {
  const [inputData, setInputData] = useState({ email: '', password: '' });
  // eslint-disable-next-line no-unused-vars
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const submitLogin = (event) => {
    event.preventDefault();
    // Inserir lógica para submeter o login
  };

  return (
    <S.PageStyle>
      <S.Logo src={logo} alt="Logo Atelie" />
      <S.Form onSubmit={submitLogin}>
        <S.Input
          required
          placeholder="E-mail"
          type="email"
          name="email"
          value={inputData.email}
          onChange={handleChange}
          disabled={isDisabled}
          formNoValidate
        />
        <S.Input
          required
          placeholder="Senha"
          type="password"
          name="password"
          value={inputData.email}
          onChange={handleChange}
          disabled={isDisabled}
          formNoValidate
        />
        <S.Button type="submit" disabled={isDisabled}>Entrar</S.Button>
      </S.Form>
      <Link to="/sign-up" style={{ pointerEvents: isDisabled ? 'none' : 'all' }}>
        <S.Redirect>Não tem uma conta? Clique e cadastre-se.</S.Redirect>
      </Link>
    </S.PageStyle>
  );
}

export default Login;
