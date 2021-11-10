import styled from 'styled-components';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { requestSignOut } from '../services/API';

function Menu({ setIsMenuVisible }) {
  const { user, setUser } = useContext(UserContext);
  const [isLoginDisabled, setIsLoginDisabled] = useState(false);
  const [isLogoutDisabled, setIsLogoutDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      setIsLogoutDisabled(true);
    } else {
      setIsLoginDisabled(true);
    }
  }, [isLogoutDisabled, isLoginDisabled]);

  const loginUser = () => {
    setIsMenuVisible(false);
    if (!isLoginDisabled) {
      navigate('/sign-in');
    }
  };

  const logoutUser = async () => {
    setIsMenuVisible(false);
    requestSignOut(user.token)
      .then(() => {
        localStorage.removeItem('@user');
        setUser('');
        setIsLoginDisabled(false);
        setIsLogoutDisabled(true);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Usuário inexistente',
          });
        }
      });
    await Swal.fire({
      title: 'Usuário deslogado com sucesso!',
      text: 'Deseja seguir para página de login ou continuar navegando?',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Ir para login',
      cancelButtonText: 'Continuar navegando',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/sign-in');
      }
    });
  };

  return (
    <MenuBox>
      <IconLogin onClick={loginUser} disabled={isLoginDisabled}>Fazer Login</IconLogin>
      <IconLogout onClick={logoutUser} disabled={isLogoutDisabled}>Sair</IconLogout>
    </MenuBox>
  );
}

Menu.propTypes = {
  setIsMenuVisible: PropTypes.node.isRequired,
};

export default Menu;

const MenuBox = styled.section`
  position: fixed;
  top: 80px;
  right: 0px;
  background-color: #FFFFFF;
  border: none;
  border-radius: 0px 0px 0px 10px;
  box-shadow: -2px 2px 3px 0px rgba(0, 0, 0, 0.2);
`;

const IconLogin = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin: 10px;
  color: #368DE3;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
`;

const IconLogout = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin: 10px;
  color: #368DE3;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
`;
