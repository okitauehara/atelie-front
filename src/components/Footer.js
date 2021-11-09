import styled from 'styled-components';
import PropTypes from 'prop-types';

function Footer({ isHome, isCart }) {
  return (
    <Container>
      <div>
        <HomeIcon isHome={isHome}>
          <ion-icon name="home-outline" />
        </HomeIcon>

        <CartIcon isCart={isCart}>
          <ion-icon name="cart-outline" />
        </CartIcon>
      </div>
    </Container>
  );
}

Footer.propTypes = {
  isHome: PropTypes.node.isRequired,
  isCart: PropTypes.node.isRequired,
};

const Container = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);

  div {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
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
