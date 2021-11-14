import styled from 'styled-components';

const PageStyle = styled.section`
  margin-top: 90px;
  margin-bottom: 90px;
  width: 100vw;
  height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PageTitle = styled.h1`
  font-size: 18px;
  font-weight: 300;
  color: #A0A0A0;
  text-align: center;
`;

const Details = styled.div`
  height: 300px;
  margin: 0px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Items = styled.div`
  height: 90px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;
const DivTitle = styled.h2`
  font-size: 17px;
  line-height: 1.5;
  font-weight: 300;
  color: #A0A0A0;

`;
const Item = styled.p`
  font-size: 17px;
  line-height: 1.5;
  font-weight: 300;
  color: #000000;
  display: flex;
  justify-content: space-between;
  word-break: break-word;

  & span {
    max-width: 60vw;
  }
`;
const Address = styled.div`
  height: 125px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;
const AddressText = styled.p`
  font-size: 17px;
  line-height: 1.5;
  font-weight: 700;
  color: #000000;
  word-break: break-word;

  & span {
    font-size: 17px;
    line-height: 1.5;
    font-weight: 300;
    color: #000000;
  }
`;

export {
  PageStyle,
  PageTitle,
  Details,
  Items,
  DivTitle,
  Item,
  Address,
  AddressText,
};
