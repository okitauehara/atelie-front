import { useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Logo from '../assets/logo2.png';

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <Container>
      <Img src={Logo} alt="logo" />
      <ion-icon onClick={() => setIsMenuVisible(!isMenuVisible)} name="menu-outline" />
      {isMenuVisible ? <Menu setIsMenuVisible={setIsMenuVisible} /> : null}
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 80px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 20px;

  ion-icon {
    font-size: 40px;
    color: #368de3;
  }
`;

const Img = styled.img`
  height: 40px;
`;

export default Header;
