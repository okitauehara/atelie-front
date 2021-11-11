import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';

function Footer({ isHome, isCart }) {
  return (
    <Container>
      <Link to="/">
        <HomeIcon color={isHome} />
      </Link>

      <Link to="/cart">
        <CartIcon color={isCart} />
      </Link>
    </Container>
  );
}

Footer.propTypes = {
  isHome: PropTypes.node.isRequired,
  isCart: PropTypes.node.isRequired,
};

const Container = styled.footer`
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const HomeIcon = styled(IoHomeOutline)`
  font-size: 40px;
  margin-top: 8px;
  color: ${(color) => color};
`;

const CartIcon = styled(FiShoppingCart)`
  font-size: 40px;
  margin-top: 8px;
  color: ${(color) => color};
`;

export default Footer;
