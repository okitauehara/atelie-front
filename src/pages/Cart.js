/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import formatePrice from '../services/utils';
import CartProduct from '../components/CartProduct';

function Cart() {
  const arr = [1, 2, 3];

  return (
    <>
      <Header />
      <PageStyle>
        <Products>
          {arr.map((products, index) => (
            <CartProduct />
          ))}
        </Products>
        <CheckoutArea>
          <span>Esvaziar carrinho</span>
          <div>
            <div>Subtotal</div>
            <div>
              R$
              {formatePrice(64000)}
            </div>
          </div>
          <button type="submit">Ir para o checkout</button>
        </CheckoutArea>
      </PageStyle>
      <Footer isHome="#545D66" isCart="#368DE3" />
    </>
  );
}

const PageStyle = styled.div`
  margin-top: 90px;
  margin-bottom: 90px;
  overflow-y: scroll;
`;

const Products = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CheckoutArea = styled.div`
  text-align: center;

  span {
    display: inline-block;
    margin-bottom: 20px;
    color: #545d66;
    font-family: Roboto, sans-serif;
    font-size: 14px;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 100px;
    color: #000000;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
    margin-top: 5px;
  }

  button {
    width: 281px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    background-color: #183e63;
    color: #ffffff;
    font-weight: 600;
    font-size: 17px;
  }
`;

export default Cart;
