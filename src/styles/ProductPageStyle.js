import styled from 'styled-components';

const PageStyle = styled.div`
  margin-top: 120px;
  margin-bottom: 90px;
  overflow-y: scroll;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 274px;
    }

    h2 {
      font-family: 'Roboto', 'sans-serif';
      font-size: 22px;
      font-weight: 600;
      margin-top: 32px;
      color: #183e63;
    }

    span {
      font-size: 18px;
      font-weight: 600;
      margin-top: 20px;
    }

    div {
      margin-top: 30px;
      flex-direction: row;

      p {
        font-family: 'Roboto', sans-serif;
        color: #545d66;
      }

      button {
        font-weight: 600;
        font-size: 15px;
        padding: 0;
        height: 26px;
        width: 24px;
        text-align: center;
        margin-left: 15px;
        border: 0;
        background-color: #e5e5e5;
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  height: 274px;
`;

const ProductName = styled.h2`
  font-family: 'Roboto', 'sans-serif';
  font-size: 22px;
  font-weight: 600;
  margin-top: 32px;
  color: #183e63;
`;

const ProductPrice = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
`;

const SizeArea = styled.div`
  margin-top: 30px;
  flex-direction: row;

  p {
    font-family: 'Roboto', sans-serif;
    color: #545d66;
  }
`;

const SizeButton = styled.button`
  font-weight: 600;
  font-size: 15px;
  padding: 0;
  height: 26px;
  width: 24px;
  text-align: center;
  margin-left: 15px;
  border: 0;
  background-color: #e5e5e5;
`;

const Button = styled.button`
  margin-top: 20px;
  width: 281px;
  height: 39px;
  border-radius: 5px;
  border: 0;
  background-color: #183e63;
  color: #ffffff;
  font-weight: 600;
  font-size: 17px;
`;

export {
  PageStyle,
  Container,
  Img,
  ProductName,
  ProductPrice,
  SizeArea,
  SizeButton,
  Button,
};
