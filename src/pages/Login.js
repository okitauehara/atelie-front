import {
  PageStyle,
  Logo,
  Form,
  Input,
  Button,
  Redirect,
} from '../styles/LoginSignUpStyle';
import logo from '../assets/logo.png';

function Login() {
  return (
    <PageStyle>
      <Logo src={logo} alt="Logo Atelie" />
      <Form>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <Button type="submit">Entrar</Button>
        <Redirect>Não tem uma conta? Clique e cadastre-se.</Redirect>
      </Form>
    </PageStyle>
  );
}

export default Login;
