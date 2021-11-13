import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product';
import productsData from '../services/productsData';
import { getProducts } from '../services/API';
import Loading from '../components/Loading';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      {products.length === 0 ? (
        <Loading />
      ) : (
        <PageStyle>
          <Products>
            {products.map((product, index) => (
              <Link to={`/home/${index + 1}`}>
                <Product
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.value}
                  url={productsData[index].url}
                />
              </Link>
            ))}
          </Products>
        </PageStyle>
      )}
      <Footer isHome="#368DE3" isCart="#545D66" />
    </>
  );
}

const PageStyle = styled.div`
  margin-top: 90px;
  margin-bottom: 90px;
  overflow-y: scroll;
`;

const Products = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default Home;
