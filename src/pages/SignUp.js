import {
  PageStyle,
  Logo,
  Form,
  Input,
  Button,
  Redirect,
} from '../styles/LoginSignUpStyle';
import logo from '../assets/logo.png';

function SignUp() {
  return (
    <PageStyle>
      <Logo src={logo} alt="Logo Atelie" />
      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <Input placeholder="Confirme a senha" />
        <Button>Cadastrar</Button>
      </Form>
      <Redirect>Já tem cadastro? Faça login e aproveite!</Redirect>
    </PageStyle>
  );
}

export default SignUp;
