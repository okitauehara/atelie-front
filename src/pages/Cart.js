/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { formatePrice } from '../services/utils';
import CartProduct from '../components/CartProduct';
import { getCartProducts } from '../services/API';
import Loading from '../components/Loading';

function Cart() {
  const { orderId } = useParams();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState('');
  const user = JSON.parse(localStorage.getItem('@user'));
  const navigate = useNavigate();

  useEffect(async () => {
    if (!user.token) {
      await Swal.fire({
        title: 'Login necessário',
        text: 'Para visualizar seu carrinho você precisa estar logado',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/sign-in');
        }
      });
    } else {
      getCartProducts(orderId, user.token).then((res) => {
        const cartProducts = res.data;
        setProducts(cartProducts);

        let totalPrice = 0;
        cartProducts.forEach((p) => {
          totalPrice += p.product_value;
        });
        setTotal(totalPrice);
      });
    }
  }, [products]);

  return (
    <>
      <Header />
      {products.length === 0 ? (
        <Loading />
      ) : (
        <PageStyle>
          <Products>
            {products.map((product, index) => (
              <CartProduct key={index} product={product} />
            ))}
          </Products>
          <CheckoutArea>
            <span>Esvaziar carrinho</span>
            <div>
              <div>Subtotal</div>
              <div>
                R$
                {formatePrice(total)}
              </div>
            </div>
            <button type="submit">Ir para o checkout</button>
          </CheckoutArea>
        </PageStyle>
      )}
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
