import PropTypes from 'prop-types';
import * as S from '../styles/ProductStyle';
import formatePrice from '../services/utils';

// eslint-disable-next-line object-curly-newline
function Product({ name, description, price, url }) {
  return (
    <>
      <S.Container>
        <div>
          <img src={url} alt="nike shirt" />
          <S.Info>
            <div>
              <h2>{name}</h2>
              <h3>{description}</h3>
            </div>
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
