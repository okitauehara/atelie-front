import styled from 'styled-components';

const Container = styled.li`
  margin-left: 30px;

  div {
    display: flex;
    gap: 20px;
  }

  img {
    height: 145px;
  }
`;

const Info = styled.div`
  flex-direction: column;
  justify-content: space-between;

  div {
    flex-direction: column;
    gap: 10px;

    h2 {
      font-family: 'Roboto', sans-serif;
      font-weight: 600;
      font-size: 24px;
      color: #183e63;
    }

    h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      color: #545d66;
      width: 150px;
    }
  }
`;

const Price = styled.div`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
`;

const Line = styled.div`
  border: 1px solid #e5e5e5;
  margin: 10px 30px;
`;

export {
  Container, Info, Price, Line,
};
