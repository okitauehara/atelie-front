import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as S from '../styles/LoginSignUpStyle';
import logo from '../assets/logo.png';
import { postSignUp } from '../services/API';

function SignUp() {
  const [inputData, setInputData] = useState({ name: '', email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();
  const emailRegex = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}';

  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const submitSignUp = (event) => {
    event.preventDefault();
    setIsDisabled(true);
    const body = inputData;
    postSignUp(body)
      .then(async () => {
        await Swal.fire({
          icon: 'success',
          title: 'Usuário cadastrado!',
        });
        setIsDisabled(false);
        navigate('/');
      })
      .catch((err) => {
        if (err.response.status === 400) {
          Swal.fire({
            icon: 'error',
            title: 'Verifique se todos os dados inseridos são válidos',
          });
        }
        if (err.response.status === 409) {
          Swal.fire({
            icon: 'error',
            title: 'O e-mail inserido já está em uso',
          });
        }
        setIsDisabled(false);
      });
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
          disabled={isDisabled}
        />
        <S.Input
          required
          placeholder="E-mail"
          type="email"
          name="email"
          value={inputData.email}
          onChange={handleChange}
          pattern={emailRegex}
          disabled={isDisabled}
        />
        <S.Input
          required
          placeholder="Senha"
          type="password"
          name="password"
          value={inputData.password}
          onChange={handleChange}
          minLength="8"
          disabled={isDisabled}
        />
        <S.Input
          required
          placeholder="Confirme a senha"
          type="password"
          pattern={inputData.password}
          disabled={isDisabled}
        />
        <S.Button type="submit" disabled={isDisabled}>Cadastrar</S.Button>
      </S.Form>
      <Link to="/" style={{ pointerEvents: isDisabled ? 'none' : 'all' }}>
        <S.Redirect>Já tem cadastro? Faça login e aproveite!</S.Redirect>
      </Link>
    </S.PageStyle>
  );
}

export default SignUp;
