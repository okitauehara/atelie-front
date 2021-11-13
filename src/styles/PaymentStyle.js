import styled from 'styled-components';
import { AiOutlineBarcode } from 'react-icons/ai';
import { ImCreditCard } from 'react-icons/im';
import { FaCcPaypal } from 'react-icons/fa';

const PageStyle = styled.section`
  margin: 100px 30px;
`;

const PageTitle = styled.h1`
  font-size: 18px;
  color: #A0A0A0;
  margin: 20px auto;

  & a {
    font-size: 14px;
    font-style: italic;
    color: #7DB2E8;
  }
`;

const Address = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
`;

const Input = styled.input`
  height: 40px;
  background-color: #F1F5F4;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 7px;
  padding-left: 15px;

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
  }
`;

const PayMethods = styled.form`
  display: flex;
  flex-direction: column;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;

const LabelInput = styled.label`
  display: flex;
  align-items: center;
`;

const BankBill = styled(AiOutlineBarcode)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const CreditCard = styled(ImCreditCard)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const PayPal = styled(FaCcPaypal)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const FinalValue = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  margin-top: 15px;
`;

export {
  PageStyle,
  PageTitle,
  Address,
  Inputs,
  Input,
  PayMethods,
  Option,
  RadioInput,
  LabelInput,
  BankBill,
  CreditCard,
  PayPal,
  FinalValue,
};
