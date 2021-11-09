import styled from 'styled-components';
import Logo from '../assets/logo2.png';

function Header() {
  return (
    <Container>
      <div>
        <Img src={Logo} alt="logo" />
        <ion-icon name="log-out-outline" />
      </div>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 80px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  z-index: 1;

  div {
    display: flex;
    justify-content: space-around;
    gap: 100px;
    align-items: center;

    ion-icon {
      margin-top: 15px;
      font-size: 40px;
      color: #368de3;
    }
  }
`;

const Img = styled.img`
  margin-top: 15px;
  height: 47px;
`;

export default Header;
