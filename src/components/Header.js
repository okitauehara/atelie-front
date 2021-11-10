import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import Logo from '../assets/logo2.png';
import UserContext from '../contexts/UserContext';
import { requestSignOut } from '../services/API';

function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logoutUser = async () => {
    await Swal.fire({
      title: 'Deseja deslogar de sua conta?',
      text: 'Você terá que inserir seus dados novamente no próximo acesso',
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
            navigate('/');
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
      <div>
        <Img src={Logo} alt="logo" />
        <ion-icon onClick={logoutUser} name="log-out-outline" />
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
  background-color: #ffffff;

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
