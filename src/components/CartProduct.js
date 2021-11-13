import styled from 'styled-components';
import Nike from '../assets/Camisa Nike.jpg';
import * as S from '../styles/ProductStyle';
import formatePrice from '../services/utils';

function CartProduct() {
  return (
    <>
      <S.Container>
        <div>
          <S.ImgProduct src={Nike} alt="nike shirt" />
          <S.Info>
            <S.TextProduct>
              <h2>Camisa Nike</h2>
              <S.Price>
                R$
                {` ${formatePrice(25000)}`}
              </S.Price>
              <h3>Tamanho: G</h3>
            </S.TextProduct>
            <div>
              <QuantityButton type="submit">-</QuantityButton>
              <Quantity>1</Quantity>
              <QuantityButton type="submit">+</QuantityButton>
            </div>
          </S.Info>
        </div>
      </S.Container>
      <S.Line />
    </>
  );
}

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
