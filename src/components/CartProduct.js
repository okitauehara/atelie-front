/* eslint-disable react/jsx-one-expression-per-line */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as S from '../styles/ProductStyle';
import { formatePrice, loadImg } from '../services/utils';

function CartProduct({ product, changeProductQuantity }) {
  const [img, setImg] = useState('');

  useEffect(() => {
    const imgUrl = loadImg(product.product_name);
    setImg(imgUrl);
  }, []);

  function incrementThisProduct(e) {
    e.stopPropagation();
    changeProductQuantity(product, product.product_qty + 1);
  }

  function decrementThisProduct(e) {
    e.stopPropagation();
    if (product.product_qty === 1) return;
    changeProductQuantity(product, product.product_qty - 1);
  }

  return (
    <>
      <S.Container>
        <div>
          <S.ImgProduct src={img} alt="nike shirt" />
          <S.Info>
            <S.TextProduct>
              <h2>{product.product_name}</h2>
              <S.Price>
                R$
                {` ${formatePrice(product.product_value)}`}
              </S.Price>
              <h3>Tamanho: {`${product.product_size}`}</h3>
            </S.TextProduct>
            <div>
              <QuantityButton onClick={(e) => decrementThisProduct(e)} type="submit">-</QuantityButton>
              <Quantity>{product.product_qty}</Quantity>
              <QuantityButton onClick={(e) => incrementThisProduct(e)} type="submit">+</QuantityButton>
            </div>
          </S.Info>
        </div>
      </S.Container>
      <S.Line />
    </>
  );
}

CartProduct.propTypes = {
  product: PropTypes.node.isRequired,
  changeProductQuantity: PropTypes.node.isRequired,
};

const Quantity = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

const QuantityButton = styled.button`
  background-color: #ffffff;
  border: 0;
  font-size: 17px;
  color: #a0a0a0;
`;

export default CartProduct;
