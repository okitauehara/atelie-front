import axios from 'axios';

const BASE_URL = 'https://atelie-staging.herokuapp.com/';

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

function getProducts() {
  const promise = axios.get(`${BASE_URL}/products`);
  return promise;
}

export {
  postSignUp,
  getProducts,
};
