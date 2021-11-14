import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../styles/ProductPageStyle';
import * as S from '../styles/CheckoutPageStyle';
import formatePrice from '../services/utils';
import { getFinalOrder, getOrderDetails, getCep } from '../services/API';

function Checkout() {
  const { orderId } = useParams();
  const user = JSON.parse(localStorage.getItem('@user'));
  const [products, setProducts] = useState('');
  const [orderDetails, setOrderDetails] = useState([]);
  const [cepInfo, setCepInfo] = useState({});
  const address = `${cepInfo.logradouro}, ${cepInfo.bairro}, ${cepInfo.localidade} - ${cepInfo.uf}`;

  useEffect(async () => {
    if (user) {
      await getFinalOrder(user?.token, orderId)
        .then((res) => setProducts(res.data));
      await getOrderDetails(user?.token, orderId)
        .then((res) => setOrderDetails(res.data));
      getCep(orderDetails.address_cep)
        .then((res) => setCepInfo(res.data));
    }
  }, []);

  return (
    <>
      <Header />
      <S.PageStyle>
        <S.PageTitle>Detalhes do seu pedido:</S.PageTitle>
        <S.Details>
          <S.DivTitle>Items:</S.DivTitle>
          <S.Items>
            {products.map((product) => (
              <S.Item>
                <span>
                  {product.product_qty}
                  x
                  {' '}
                  {product.product_name}
                  {' '}
                  {product.product_size}
                </span>
                <span>{formatePrice(product.product_value)}</span>
              </S.Item>
            ))}
          </S.Items>
          <S.DivTitle>Entrega:</S.DivTitle>
          <S.Address>
            <S.AddressText>
              <span>
                Destinatário:
                {orderDetails.name}
              </span>
            </S.AddressText>
            <S.AddressText>
              <span>Endereço:</span>
              {address}
            </S.AddressText>
            <S.AddressText>
              <span>Pagamento:</span>
              {orderDetails.payment_id}
            </S.AddressText>
          </S.Address>
        </S.Details>
        <Button style={{ margin: '0px auto' }}>Finalizar compra</Button>
      </S.PageStyle>
      <Footer />
    </>
  );
}

export default Checkout;
