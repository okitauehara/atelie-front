import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Footer({ isHome, isCart }) {
  return (
    <Container>
      <Link to="/">
        <HomeIcon isHome={isHome}>
          <ion-icon name="home-outline" />
        </HomeIcon>
      </Link>

      <Link to="/cart">
        <CartIcon isCart={isCart}>
          <ion-icon name="cart-outline" />
        </CartIcon>
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

const HomeIcon = styled.div`
  ion-icon {
    font-size: 40px;
    color: ${(isHome) => (isHome ? '#368DE3' : '#545D66')};
  }
`;

const CartIcon = styled.div`
  ion-icon {
    font-size: 40px;
    color: ${(isCart) => (!isCart ? '#368DE3' : '#545D66')};
  }
`;

export default Footer;
