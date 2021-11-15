import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Checkmark from '../components/Checkmark';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Success() {
  const user = JSON.parse(localStorage.getItem('@user'));
  const navigate = useNavigate();

  useEffect(async () => {
    if (!user) {
      await Swal.fire({
        title: 'Login necessário',
        text: 'Para acessar essa rota, você precisa estar logado',
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Fazer Login',
        denyButtonText: 'Ir para Home',
        confirmButtonColor: '#2A6DB0',
        denyButtonColor: '#AAA',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/sign-in');
        } else {
          navigate('/');
        }
      });
    }
  }, []);

  return (
    <>
      <Header />
      <PageStyle>
        <Checkmark />
        <Texts>
          <SuccessText>Pedido concluído com sucesso!!</SuccessText>
          <SuccessText>Obrigado pela preferência :)</SuccessText>
        </Texts>
      </PageStyle>
      <Footer isHome="#545D66" isCart="#545D66" />
    </>
  );
}

const PageStyle = styled.section`
  margin-top: 90px;
  margin-bottom: 90px;
  height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const SuccessText = styled.p`
  font-size: 18px;
  color: #183E63;
  margin-bottom: 10px;
`;

export default Success;
