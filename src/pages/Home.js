import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product';

const products = [1, 2, 3, 4, 5, 6];

function Home() {
  return (
    <>
      <Header />
      <PageStyle>
        <ul>
          {products.map(() => (
            <Product />
          ))}
        </ul>
      </PageStyle>
      <Footer isHome isCart={false} />
    </>
  );
}

const PageStyle = styled.div`
  margin-top: 90px;
  height: 560px;
  margin-bottom: 90px;
  overflow-y: scroll;

  ul {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export default Home;
