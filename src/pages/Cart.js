/* eslint-disable react/jsx-no-bind */
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
import { formatePrice, calculateTotalOrder } from '../services/utils';
import CartProduct from '../components/CartProduct';
import { getCartProducts, clearCart, updateProductsQuantity } from '../services/API';
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
        text: 'Para acessar o seu carrinho, você precisa estar logado',
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
    } else {
      getCartProducts(orderId, user.token).then((res) => {
        const cartProducts = res.data;
        setProducts(cartProducts);
        const totalPrice = calculateTotalOrder(cartProducts);
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
      confirmButtonColor: '#2A6DB0',
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart(orderId, user.token)
          .then(() => {
            setProducts('');
          });
      }
    });
  }

  function changeProductQuantity(product, quantity) {
    // eslint-disable-next-line no-param-reassign
    product.product_qty = quantity;
    setProducts([...products]);
    const totalPrice = calculateTotalOrder(products);
    setTotal(totalPrice);
  }

  function handleGoToPayment() {
    const body = {
      products,
    };
    updateProductsQuantity(orderId, user.token, body)
      .then(() => {
        navigate(`/payment/${orderId}`);
      })
      .catch(async () => {
        await Swal.fire({
          title: 'Erro ao prosseguir para o pagamento',
          text: 'Por favor, tente novamente',
          icon: 'error',
        });
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
                <CartProduct
                  key={index}
                  product={product}
                  changeProductQuantity={changeProductQuantity}
                />
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
              <button onClick={handleGoToPayment} type="submit">
                Finalizar compra
              </button>
            </CheckoutArea>
          </PageStyle>
        )
      ) : (
        <EmptyCardContainerMsg>
          <h1>Carrinho vazio :(</h1>
          Volte à home e adicione algum produto
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
  font-size: 24px;
  font-family: Roboto, 'sans-serif';
  line-height: 1.5;
  color: #183E63;
`;

export default Cart;
