import { Link } from 'react-router-dom';
import * as S from '../styles/LoginSignUpStyle';
import logo from '../assets/logo.png';

function Login() {
  return (
    <S.PageStyle>
      <S.Logo src={logo} alt="Logo Atelie" />
      <S.Form>
        <S.Input placeholder="E-mail" />
        <S.Input placeholder="Senha" />
        <S.Button type="submit">Entrar</S.Button>
      </S.Form>
      <Link to="/sign-up">
        <S.Redirect>Não tem uma conta? Clique e cadastre-se.</S.Redirect>
      </Link>
    </S.PageStyle>
  );
}

export default Login;
