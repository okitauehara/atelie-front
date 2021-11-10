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

function requestSignOut() {
  const config = createHeaders();
  const promise = axios.delete(`${BASE_URL}/sign-out`, config);
  return promise;
}

export {
  postSignUp, postLogin, getProducts, getProduct, requestSignOut,
};
