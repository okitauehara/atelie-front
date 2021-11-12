/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getProduct, updateProductSizes, createNewOrder } from '../services/API';
import productsData from '../services/productsData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SizeButton from '../components/SizeButton';
import formatePrice from '../services/utils';
import * as S from '../styles/ProductPageStyle';
import Loading from '../components/Loading';
import UserContext from '../contexts/UserContext';

function Product() {
  const sizesArr = [
    {
      name: 'P',
      isSelected: false,
    },
    {
      name: 'M',
      isSelected: false,
    },
    {
      name: 'G',
      isSelected: false,
    },
  ];
  const { productId } = useParams();
  const { user } = useContext(UserContext);
  const [sizes, setSizes] = useState(sizesArr);
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
    sizesArr.forEach((s) => {
      s.isSelected = false;
      if (s.name === size) {
        s.isSelected = true;
      }
    });
    console.log(sizesArr);
    setSizes(sizesArr);
    console.log(sizes);
    setProductInfo({ ...productInfo, size });
    setIsDisabled(!isDisabled);
  }

  // eslint-disable-next-line consistent-return
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
          const body = {
            size: productInfo.size,
          };
          updateProductSizes(productId, body);
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
              {sizesArr.map((size, index) => (
                <SizeButton
                  key={index}
                  selectSize={selectSize}
                  type="submit"
                  text={size.name}
                  isSelected={size.isSelected}
                />
              ))}
            </S.SizeArea>
            <S.Button onClick={() => addToCart(productId, user?.token)} disabled={productInfo.size !== '' ? false : true}>Adicionar ao carrinho</S.Button>
          </S.Container>
        </S.PageStyle>
      )}
      <Footer isHome="#545D66" isCart="#545D66" />
    </>
  );
}

export default Product;
