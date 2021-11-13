/* eslint-disable react/jsx-one-expression-per-line */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as S from '../styles/ProductStyle';
import formatePrice from '../services/utils';

function CartProduct({ product }) {
  return (
    <>
      <S.Container>
        <div>
          <S.ImgProduct src={`../assets/${product.product_name}.jpg`} alt="nike shirt" />
          <S.Info>
            <S.TextProduct>
              <h2>{product.product_name}</h2>
              <S.Price>
                R$
                {` ${formatePrice(product.product_value.toString())}`}
              </S.Price>
              <h3>Tamanho: {`${product.product_size}`}</h3>
            </S.TextProduct>
            <div>
              <QuantityButton type="submit">-</QuantityButton>
              <Quantity>{product.product_qty}</Quantity>
              <QuantityButton type="submit">+</QuantityButton>
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
