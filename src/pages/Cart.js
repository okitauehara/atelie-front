/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
import { getCartProducts, clearCart } from '../services/API';
import Loading from '../components/Loading';

function Cart() {
  const { orderId } = useParams();
  const [products, setProducts] = useState('');
  const [total, setTotal] = useState('');
  const user = JSON.parse(localStorage.getItem('@user'));
  const navigate = useNavigate();

  useEffect(async () => {
    if (!user?.token) {
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
  }, []);

  async function deleteProductsFromCart() {
    await Swal.fire({
      title: 'O carrinho será esvaziado!',
      text: 'Deseja remover todos os produtos do carrinho?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart(orderId, user.token)
          .then(() => {
            setProducts('');
          });
      }
    });
  }

  return (
    <>
      <Header />
      {products ? (
        products.length === 0 ? (
          <Loading />
        ) : (
          <PageStyle>
            <Products>
              {products.map((product, index) => (
                <CartProduct key={index} product={product} />
              ))}
            </Products>
            <CheckoutArea>
              <span onClick={() => deleteProductsFromCart()}>Esvaziar carrinho</span>
              <div>
                <div>Subtotal</div>
                <div>
                  R$
                  {formatePrice(total)}
                </div>
              </div>
              <button onClick={() => navigate(`/payment/${orderId}`)} type="submit">
                Finalizar compra
              </button>
            </CheckoutArea>
          </PageStyle>
        )
      ) : (
        <EmptyCardContainerMsg>
          Carrinho vazio! Volte à home e adicione algum produto :)
        </EmptyCardContainerMsg>
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

const EmptyCardContainerMsg = styled.div`
  margin-top: 40vh;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: Roboto, 'sans-serif';
  color: #368de3;
`;

export default Cart;
