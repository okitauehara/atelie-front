import axios from 'axios';

const BASE_URL = 'localhost:4000';

// Remover eslint ao implementar rota com autenticação
// eslint-disable-next-line no-unused-vars
function createHeaders(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
}

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

export {
  // Remover eslint ao implementar exportação de mais de uma rota
  // eslint-disable-next-line import/prefer-default-export
  postSignUp,
};