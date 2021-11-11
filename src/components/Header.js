import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { RiLogoutBoxRLine, RiUserSharedLine } from 'react-icons/ri';
import Logo from '../assets/logo2.png';
import UserContext from '../contexts/UserContext';
import { requestSignOut } from '../services/API';

function Header() {
  const [isLogged, setIsLogged] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user === null) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  }, [isLogged]);

  const logoutUser = async () => {
    await Swal.fire({
      title: 'Deseja deslogar de sua conta?',
      text: 'Você precisará reinserir seus dados ao finalizar a compra',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        requestSignOut(user.token)
          .then(() => {
            localStorage.removeItem('@user');
            setUser('');
            window.location.reload(false);
          })
          .catch((err) => {
            if (err.response.status === 401) {
              Swal.fire({
                icon: 'error',
                title: 'Usuário inexistente',
              });
            }
          });
      }
    });
  };

  return (
    <Container>
      <Img src={Logo} alt="logo" />
      {isLogged ? <LogoutIcon onClick={logoutUser} /> : <Link to="/sign-in"><LoginIcon /></Link>}
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
`;

const Img = styled.img`
  height: 40px;
`;

const LogoutIcon = styled(RiLogoutBoxRLine)`
  font-size: 35px;
  color: #368de3;
`;

const LoginIcon = styled(RiUserSharedLine)`
  font-size: 35px;
  color: #368de3;
`;

export default Header;
