import Nike from '../assets/Camisa Nike.jpg';
import * as S from '../styles/ProductStyle';

function Product() {
  return (
    <>
      <S.Container>
        <div>
          <img src={Nike} alt="nike shirt" />
          <S.Info>
            <div>
              <h2>Camisa Nike</h2>
              <h3>Conforte e estilo para o seu dia-a-dia</h3>
            </div>
            <S.Price>R$ 250,00</S.Price>
          </S.Info>
        </div>
      </S.Container>
      <S.Line />
    </>
  );
}

export default Product;
