/* eslint-disable no-nested-ternary */
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCep, updateUser } from '../services/API';
import { Button } from '../styles/ProductPageStyle';
import * as S from '../styles/PaymentStyle';
import UserContext from '../contexts/UserContext';

function Payment() {
  const { user } = useContext(UserContext);
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
    if (!user) {
      await Swal.fire({
        icon: 'warning',
        title: 'Você precisa estar logado para podermos atualizar o endereço de entrega',
      });
      navigate('/sign-in');
      return;
    }
    if (!cepData.cep || !cepData.number || !paymentData.payment) {
      Swal.fire({
        icon: 'error',
        title: 'Houve um erro!',
        text: 'Preencha todos os campos necessários para concluir a compra',
      });
    }
    cepData.cep = cepData.cep.replace(/[^0-9]/g, '');
    cepData.number = Number(cepData.number);
    updateUser(user?.token, cepData)
      .then(async () => {
        await Swal.fire({
          icon: 'success',
          title: 'Endereço registrado!',
        });
        navigate('/checkout');
      })
      .catch(async (err) => {
        if (err.response.status === 400) {
          Swal.fire({
            icon: 'error',
            title: 'Verifique se todos os campos foram preenchidos corretamente',
          });
        }
        if (err.response.status === 404) {
          Swal.fire({
            icon: 'error',
            title: 'Não foi possível associar este endereço a um usuário cadastrado',
          });
        }
      });
  };

  return (
    <>
      <Header />
      <S.PageStyle>
        <S.PageTitle>
          Insira o CEP e o número de sua residência:
          <br />
          <a href={correiosAddress} target="_blank" rel="noreferrer">Consulte seu CEP</a>
        </S.PageTitle>
        <S.Inputs>
          <S.Input
            required
            placeholder="CEP"
            type="text"
            name="cep"
            value={cepData.cep}
            onChange={handleAddressChange}
            onBlur={() => searchCep(cepData.cep)}
            style={{ width: '50vw' }}
            autoFocus
          />
          <S.Input
            required
            placeholder="Número"
            type="number"
            name="number"
            value={cepData.number}
            onChange={handleAddressChange}
            style={{ width: '30vw' }}
          />
        </S.Inputs>
        <S.PageTitle>Confira seus dados:</S.PageTitle>
        <S.Address>
          {cepInfo ? (cepInfo.logradouro ? address : 'CEP inválido') : 'Insira o CEP para buscarmos seu endereço'}
          <br />
          {cepInfo && cepData.number ? `nº ${cepData.number}` : <br />}
        </S.Address>
        <S.PageTitle>Selecione a forma de pagamento:</S.PageTitle>
        <S.PayMethods>
          <S.Option>
            <S.RadioInput
              type="radio"
              name="payment"
              id="bill"
              value="boleto"
              onChange={handlePaymentChange}
            />
            <S.LabelInput htmlFor="bill">
              <S.BankBill />
              Boleto
            </S.LabelInput>
          </S.Option>
          <S.Option>
            <S.RadioInput
              type="radio"
              name="payment"
              id="credit"
              value="cartao"
              onChange={handlePaymentChange}
            />
            <S.LabelInput htmlFor="credit">
              <S.CreditCard />
              Cartão de Crédito
            </S.LabelInput>
          </S.Option>
          <S.Option>
            <S.RadioInput
              type="radio"
              name="payment"
              id="paypal"
              value="paypal"
              onChange={handlePaymentChange}
            />
            <S.LabelInput htmlFor="paypal">
              <S.PayPal />
              PayPal
            </S.LabelInput>
          </S.Option>
        </S.PayMethods>
        <S.FinalValue>Subtotal: R$640,00</S.FinalValue>
        <Button style={{ width: '100%', marginTop: '5px' }} onClick={updateInfos}>Ir para checkout</Button>
      </S.PageStyle>
      <Footer />
    </>
  );
}

export default Payment;
