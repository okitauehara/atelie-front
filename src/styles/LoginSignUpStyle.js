import styled from 'styled-components';

const PageStyle = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #183E63;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 136px;
  height: 116px;
  margin-bottom: 65px;
`;

const Form = styled.form`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: calc(100vw - 100px);
  height: 45px;
  background-color: #F1F5F4;
  font-size: 22px;
  border: none;
  outline: none;
  border-radius: 15px;
  box-shadow: 2px 2px 3px 2px #7DB2E8;
  margin-bottom: 25px;
  padding-left: 20px;

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    color: #A0A0A0;
  }

  &:valid {
    background-color: #ddfada;
  }
`;

const Button = styled.button`
  width: calc(100vw - 100px);
  height: 45px;
  background-color: #368DE3;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  color: #F1F5F4;
  border: none;
  border-radius: 15px;
  margin-bottom: 25px;
`;

const Redirect = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #F1F5F4;
  word-break: break-word;
  line-height: 2;
`;

export {
  PageStyle,
  Logo,
  Form,
  Input,
  Button,
  Redirect,
};
