import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../styles/ProductPageStyle';
import * as S from '../styles/CheckoutPageStyle';
import { formatePrice } from '../services/utils';
import { getFinalOrder, getOrderDetails, getCep } from '../services/API';
import Loading from '../components/Loading';

function Checkout() {
  const { orderId } = useParams();
  const user = JSON.parse(localStorage.getItem('@user'));
  const [products, setProducts] = useState([]);
  const [orderDetails, setOrderDetails] = useState('');
  const [cepInfo, setCepInfo] = useState('');
  const address = `${cepInfo.logradouro}, ${orderDetails.address_number} - ${cepInfo.bairro}, ${cepInfo.localidade} - ${cepInfo.uf}`;

  useEffect(async () => {
    if (user) {
      await getFinalOrder(user?.token, orderId)
        .then((res) => setProducts(res.data));
      getOrderDetails(user?.token, orderId)
        .then(async (res) => {
          setOrderDetails(res.data);
          await getCep(res.data.address_cep)
            .then((resp) => setCepInfo(resp.data));
        });
    }
  }, []);

  return (
    <>
      <Header />
      {!orderDetails ? <Loading /> : (
        <S.PageStyle>
          <S.PageTitle>Detalhes do seu pedido:</S.PageTitle>
          <S.Details>
            <S.DivTitle>Items:</S.DivTitle>
            <S.Items>
              {products.map((product) => (
                <S.Item key={product.id}>
                  <span>
                    {product.product_qty}
                    x
                    {' '}
                    {product.product_name}
                    {' '}
                    {product.product_size}
                  </span>
                  <span>
                    R$
                    {formatePrice(product.product_value)}
                  </span>
                </S.Item>
              ))}
            </S.Items>
            <S.DivTitle>Entrega:</S.DivTitle>
            <S.Address>
              <S.AddressText>
                <span>
                  Destinatário:
                  {' '}
                </span>
                {orderDetails.name}
              </S.AddressText>
              <S.AddressText>
                <span>
                  Endereço:
                  {' '}
                </span>
                {address}
              </S.AddressText>
              <S.AddressText>
                <span>
                  Pagamento:
                  {' '}
                </span>
                {orderDetails.payment_method}
              </S.AddressText>
            </S.Address>
          </S.Details>
          <Button style={{ margin: '0px auto' }}>Finalizar compra</Button>
        </S.PageStyle>
      )}
      <Footer isHome="#545D66" isCart="#545D66"/>
    </>
  );
}

export default Checkout;
