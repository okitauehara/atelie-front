import axios from 'axios';

const BASE_URL = 'https://atelie-staging.herokuapp.com';

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

function getProducts() {
  const promise = axios.get(`${BASE_URL}/products`);
  return promise;
}

function getProduct(id) {
  const promise = axios.get(`${BASE_URL}/product/${id}`);
  return promise;
}

function requestSignOut(token) {
  const config = createHeaders(token);
  const promise = axios.delete(`${BASE_URL}/sign-out`, config);
  return promise;
}

function getCep(cep) {
  const promise = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return promise;
}

function updateUser(token, body) {
  const config = createHeaders(token);
  const promise = axios.post(`${BASE_URL}/users`, config, body);
  return promise;
}

function updateOrder(token, body) {
  const config = createHeaders(token);
  const promise = axios.post(`${BASE_URL}/users`, config, body);
  return promise;
}

export {
  postSignUp, postLogin, getProducts, getProduct, requestSignOut, getCep, updateUser, updateOrder,
};
