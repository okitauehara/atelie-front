import styled from 'styled-components';
import Loader from 'react-loader-spinner';

export default function Loading() {
  return (
    <LoadingComponent>
      <Loader type="TailSpin" color="#2A6DB0" height={50} width={50} />
      <Status>Carregando...</Status>
    </LoadingComponent>
  );
}

const LoadingComponent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Status = styled.span`
  font-size: 20px;
  color: #2A6DB0;
  margin-top: 10px;
`;
