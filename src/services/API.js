import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

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

function postLogin(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);
  return promise;
}

export {
  postSignUp,
  postLogin,
};
