/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getProduct, updateProductSizes, createNewOrder, createNewCart } from '../services/API';
import productsData from '../services/productsData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import formatePrice from '../services/utils';
import * as S from '../styles/ProductPageStyle';
import Loading from '../components/Loading';
import UserContext from '../contexts/UserContext';
import CartContext from '../contexts/CartContext';

function Product() {
  const sizes = ['P', 'M', 'G'];
  const { productId } = useParams();
  const { user } = useContext(UserContext);
  const { setCart } = useContext(CartContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [productInfo, setProductInfo] = useState({
    id: '',
    name: '',
    value: '',
    size: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    getProduct(productId).then((res) => {
      setProductInfo({
        id: res.data[0].id,
        name: res.data[0].name,
        value: res.data[0].value,
      });
    });
  }, []);

  function selectSize(size) {
    setProductInfo({ ...productInfo, size });
    setIsDisabled(!isDisabled);
  }

  async function addToCart(id, token) {
    if (user === null) {
      await Swal.fire({
        title: 'Deseja fazer login?',
        text: 'Para adicionar produtos ao carrinho você precisa estar logado',
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
      createNewOrder(id, token)
        .then((res) => {
          const orderId = res.data.order_id;
          setCart(orderId);
          const bodyUpdateSize = {
            size: productInfo.size,
          };
          const bodyAddProductToCart = {
            productName: productInfo.name,
            productSize: productInfo.size,
            productValue: productInfo.value,
            productQty: 1,
          };
          updateProductSizes(productId, bodyUpdateSize);
          createNewCart(orderId, bodyAddProductToCart);
          navigate(`/cart/${orderId}`);
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Não foi possível inserir o produto no carrinho.',
          });
        });
    }
  }

  console.log(productInfo);

  return (
    <>
      <Header />
      {productInfo.id === '' ? <Loading /> : (
        <S.PageStyle>
          <S.Container>
            <S.Img
              src={
              productInfo.id === '' ? '' : productsData[productInfo.id - 1].url
            }
              alt="product-image"
            />
            <S.ProductName>{productInfo.name}</S.ProductName>
            <S.ProductPrice>
              R$
              {formatePrice(productInfo.value)}
            </S.ProductPrice>
            <S.SizeArea>
              <p>Selecione o tamanho: </p>
              {sizes.map((size, index) => (
                <>
                  <input onClick={() => selectSize(size)} key={index} type="radio" id={size} name="size" value={size} />
                  <label htmlFor={size}>{size}</label>
                </>
              ))}
            </S.SizeArea>
            <S.Button onClick={() => addToCart(productId, user?.token)} disabled={isDisabled}>Adicionar ao carrinho</S.Button>
          </S.Container>
        </S.PageStyle>
      )}
      <Footer isHome="#545D66" isCart="#545D66" />
    </>
  );
}

export default Product;
