import styled from 'styled-components';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Success() {
  return (
    <>
      <Header />
      <PageStyle>
        <CheckmarkIcon />
        <Texts>
          <SuccessText>Pedido concluído com sucesso!!</SuccessText>
          <SuccessText>Obrigado pela preferência :)</SuccessText>
        </Texts>
      </PageStyle>
      <Footer />
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

const CheckmarkIcon = styled(IoIosCheckmarkCircleOutline)`
  width: 150px;
  height: 150px;
  color: #183E63;
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
