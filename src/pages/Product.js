import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/API';
import productsData from '../services/productsData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import formatePrice from '../services/utils';
import * as S from '../styles/ProductPageStyle';
import Loading from '../components/Loading';

function Product() {
  const { productId } = useParams();
  const sizes = ['P', 'M', 'G'];
  const [productInfo, setProductInfo] = useState({
    id: '',
    name: '',
    value: '',
  });

  useEffect(() => {
    getProduct(productId).then((res) => {
      setProductInfo({
        id: res.data[0].id,
        name: res.data[0].name,
        value: res.data[0].value,
      });
    });
  }, []);

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
                // eslint-disable-next-line react/no-array-index-key
                <S.SizeButton type="submit" key={index}>{size}</S.SizeButton>
              ))}
            </S.SizeArea>
            <S.Button>Adicionar ao carrinho</S.Button>
          </S.Container>
        </S.PageStyle>
      )}
      <Footer isHome="#545D66" isCart="#545D66" />
    </>
  );
}

export default Product;
