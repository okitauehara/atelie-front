import PropTypes from 'prop-types';
import * as S from '../styles/ProductStyle';
import { formatePrice } from '../services/utils';

// eslint-disable-next-line object-curly-newline
function Product({ name, description, price, url }) {
  return (
    <>
      <S.Container>
        <div>
          <S.ImgProduct src={url} alt="nike shirt" />
          <S.Info>
            <S.TextProduct>
              <h2>{name}</h2>
              <h3>{description}</h3>
            </S.TextProduct>
            <S.Price>
              R$
              {` ${formatePrice(price)}`}
            </S.Price>
          </S.Info>
        </div>
      </S.Container>
      <S.Line />
    </>
  );
}

Product.propTypes = {
  name: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  url: PropTypes.node.isRequired,
};

export default Product;
