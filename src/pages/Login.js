import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import Loader from 'react-loader-spinner';
import { postLogin } from '../services/API';
import UserContext from '../contexts/UserContext';
import * as S from '../styles/LoginSignUpStyle';
import logo from '../assets/logo.png';

function Login() {
  const [inputData, setInputData] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const submitLogin = (event) => {
    event.preventDefault();
    setIsDisabled(true);
    const body = inputData;
    postLogin(body)
      .then((res) => {
        setUser(res.data);
        localStorage.setItem('@user', JSON.stringify(res.data));
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
        if (err.response.status === 404) {
          Swal.fire({
            icon: 'error',
            title: 'Usuário não cadastrado',
          });
        }
        setIsDisabled(false);
      });
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
          validation={false}
          autoFocus
        />
        <S.Input
          required
          placeholder="Senha"
          type="password"
          name="password"
          value={inputData.password}
          onChange={handleChange}
          disabled={isDisabled}
          validation={false}
        />
        <S.Button type="submit" disabled={isDisabled}>
          {isDisabled ? (
            <Loader type="ThreeDots" color="#F1F5F4" height={50} width={50} />
          ) : (
            'Entrar'
          )}
        </S.Button>
      </S.Form>
      <Link
        to="/sign-up"
        style={{ pointerEvents: isDisabled ? 'none' : 'all' }}
      >
        <S.Redirect>Não tem uma conta? Clique e cadastre-se.</S.Redirect>
      </Link>
      <S.Text>ou</S.Text>
      <Link
        to="/"
        style={{ pointerEvents: isDisabled ? 'none' : 'all' }}
      >
        <S.Redirect>Clique para visualizar os produtos</S.Redirect>
      </Link>
    </S.PageStyle>
  );
}

export default Login;
