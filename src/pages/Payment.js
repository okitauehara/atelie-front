/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import { AiOutlineBarcode } from 'react-icons/ai';
import { ImCreditCard } from 'react-icons/im';
import { FaCcPaypal } from 'react-icons/fa';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCep, updateUser, updateOrder } from '../services/API';
import { Button } from '../styles/ProductPageStyle';

function Payment() {
  const [cepData, setCepData] = useState({ cep: '', number: '' });
  const [paymentData, setPaymentData] = useState({ payment: '' });
  const [cepInfo, setCepInfo] = useState('');
  const navigate = useNavigate();
  const correiosAddress = 'https://buscacepinter.correios.com.br/app/endereco/index.php';
  const address = `${cepInfo.logradouro}, ${cepInfo.bairro}, ${cepInfo.localidade} - ${cepInfo.uf}`;

  const handleAddressChange = (event) => {
    setCepData({ ...cepData, [event.target.name]: event.target.value });
  };

  const handlePaymentChange = (event) => {
    setPaymentData({ ...paymentData, [event.target.name]: event.target.value });
  };

  const searchCep = (inputCep) => {
    const cep = inputCep.replace(/[^0-9]/g, '');
    if (cep.length !== 8) {
      setCepInfo('');
      return;
    }
    getCep(cep)
      .then((res) => setCepInfo(res.data));
  };

  const updateInfos = async () => {
    if (!cepData.cep || !cepData.number || !paymentData.payment) {
      Swal.fire({
        icon: 'error',
        title: 'Houve um erro!',
        text: 'Preencha todos os campos necessários para concluir a compra',
      });
    }
    cepData.number = Number(cepData.number);
    await updateOrder(paymentData);
    updateUser(cepData)
      .then(() => navigate('/checkout'));
  };

  return (
    <>
      <Header />
      <PageStyle>
        <PageTitle>
          Insira o CEP e o número de sua residência:
          <br />
          <a href={correiosAddress} target="_blank" rel="noreferrer">Consulte seu CEP</a>
        </PageTitle>
        <Inputs>
          <Input
            required
            placeholder="CEP"
            type="text"
            name="cep"
            value={cepData.cep}
            onChange={handleAddressChange}
            onBlur={() => searchCep(cepData.cep)}
            style={{ width: '50vw' }}
          />
          <Input
            required
            placeholder="Número"
            type="number"
            name="number"
            value={cepData.number}
            onChange={handleAddressChange}
            style={{ width: '30vw' }}
          />
        </Inputs>
        <PageTitle>Confira seus dados:</PageTitle>
        <Address>
          {cepInfo ? (cepInfo.logradouro ? address : 'CEP inválido') : 'Insira o CEP para buscarmos seu endereço'}
          <br />
          {cepInfo && cepData.number ? `nº ${cepData.number}` : ''}
        </Address>
        <PageTitle>Selecione a forma de pagamento:</PageTitle>
        <PayMethods>
          <Option>
            <RadioInput type="radio" name="payment" id="bill" value="boleto" onChange={handlePaymentChange} />
            <LabelInput htmlFor="bill">
              <BankBill />
              Boleto
            </LabelInput>
          </Option>
          <Option>
            <RadioInput type="radio" name="payment" id="credit" value="cartao" onChange={handlePaymentChange} />
            <LabelInput htmlFor="credit">
              <CreditCard />
              Cartão de Crédito
            </LabelInput>
          </Option>
          <Option>
            <RadioInput type="radio" name="payment" id="paypal" value="paypal" onChange={handlePaymentChange} />
            <LabelInput htmlFor="paypal">
              <PayPal />
              PayPal
            </LabelInput>
          </Option>
        </PayMethods>
        <FinalValue>Subtotal: R$640,00</FinalValue>
        <Button style={{ width: '100%', marginTop: '5px' }} onClick={updateInfos}>Ir para checkout</Button>
      </PageStyle>
      <Footer />
    </>
  );
}

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

export default Payment;
