import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../styles/ProductPageStyle';
import * as S from '../styles/CheckoutPageStyle';

function Checkout() {
  return (
    <>
      <Header />
      <S.PageStyle>
        <S.PageTitle>Detalhes do seu pedido:</S.PageTitle>
        <S.Details>
          <S.DivTitle>Items:</S.DivTitle>
          <S.Items>
            <S.Item>
              <span>1x Camisa Nike M</span>
              <span>R$250</span>
            </S.Item>
            <S.Item>
              <span>2x Calça Lacoste G</span>
              <span>R$390</span>
            </S.Item>
            <S.Item>
              <span>1x Camisa Adidas P</span>
              <span>R$250</span>
            </S.Item>
          </S.Items>
          <S.DivTitle>Entrega:</S.DivTitle>
          <S.Address>
            <S.AddressText><span>Destinatário:</span></S.AddressText>
            <S.AddressText><span>Endereço:</span></S.AddressText>
            <S.AddressText><span>Pagamento:</span></S.AddressText>
          </S.Address>
        </S.Details>
        <Button style={{ margin: '0px auto' }}>Finalizar compra</Button>
      </S.PageStyle>
      <Footer />
    </>
  );
}

export default Checkout;
