import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product';
import productsData from '../services/productsData';
import { getProducts } from '../services/API';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  console.log(products);
  return (
    <>
      <Header />
      <PageStyle>
        <ul>
          {products.map((product, index) => (
            <Product
              name={product.name}
              description={product.description}
              price={product.value}
              url={productsData[index].url}
            />
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
