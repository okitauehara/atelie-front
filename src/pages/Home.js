import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <PageStyle />
      <Footer isHome isCart={false} />
    </>
  );
}

const PageStyle = styled.div``;

export default Home;
