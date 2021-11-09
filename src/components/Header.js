import styled from 'styled-components';
import Logo from '../assets/logo2.png';

function Header() {
  return (
    <Container>
      <Img src={Logo} alt="logo" />
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 80px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

const Img = styled.img`
  margin-top: 15px;
  height: 47px;
`;

export default Header;
