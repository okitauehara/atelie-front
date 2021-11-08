import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styles/LoginSignUpStyle';
import logo from '../assets/logo.png';

function SignUp() {
  const [inputData, setInputData] = useState({ name: '', email: '', password: '' });
  const emailRegex = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}';

  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const submitSignUp = () => {
    // Implementar API de Login
  };

  return (
    <S.PageStyle>
      <S.Logo src={logo} alt="Logo Atelie" />
      <S.Form onSubmit={submitSignUp}>
        <S.Input
          required
          placeholder="Nome"
          type="text"
          name="name"
          value={inputData.name}
          onChange={handleChange}
          minLength="3"
          autoFocus
        />
        <S.Input
          required
          placeholder="E-mail"
          type="email"
          name="email"
          value={inputData.email}
          onChange={handleChange}
          pattern={emailRegex}
        />
        <S.Input
          required
          placeholder="Senha"
          type="password"
          name="password"
          value={inputData.password}
          onChange={handleChange}
          minLength="8"
        />
        <S.Input
          required
          placeholder="Confirme a senha"
          type="password"
          pattern={inputData.password}
        />
        <S.Button type="submit">Cadastrar</S.Button>
      </S.Form>
      <Link to="/">
        <S.Redirect>Já tem cadastro? Faça login e aproveite!</S.Redirect>
      </Link>
    </S.PageStyle>
  );
}

export default SignUp;
