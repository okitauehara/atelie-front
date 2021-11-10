import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getProduct } from '../services/API';
import Header from '../components/Header';
import Footer from '../components/Footer';
import calca from '../assets/Calça Lacoste.jpg';

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct(productId).then((res) => {
      setProduct(res.data);
    });
  }, []);

  console.log(product);

  return (
    <>
      <Header />
      <PageStyle>
        <div>
          <img src={calca} alt="" />
          <h2>Calça Lacoste</h2>
          <span>R$ 390,00</span>
          <div>
            <p>Selecione o tamanho</p>
            <button type="submit">P</button>
            <button type="submit">M</button>
            <button type="submit">G</button>
          </div>
          <button type="submit">Adicionar ao carrinho</button>
        </div>
      </PageStyle>
      <Footer isHome="#545D66" isCart="#545D66" />
    </>
  );
}

const PageStyle = styled.div`
  margin-top: 90px;
  margin-bottom: 90px;
  overflow-y: scroll;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 274px;
    }

    div {
      flex-direction: row;
    }
  }
`;

export default Product;
