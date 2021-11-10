import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Product() {
  return (
    <>
      <Header />
      <PageStyle />
      <Footer isHome="#545D66" isCart="#545D66" />
    </>
  );
}

const PageStyle = styled.div`
  margin-top: 90px;
  margin-bottom: 90px;
  overflow-y: scroll;
`;

export default Product;
