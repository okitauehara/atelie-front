import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

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

function updateProductSizes(id, body) {
  const promise = axios.put(`${BASE_URL}/product/${id}`, body);
  return promise;
}

function createNewOrder(token) {
  const config = createHeaders(token);
  const promise = axios.post(`${BASE_URL}/product/`, {}, config);
  return promise;
}

function createNewCart(id, body) {
  const promise = axios.post(`${BASE_URL}/cart/${id}`, body);
  return promise;
}

function requestSignOut() {
  const config = createHeaders();
  const promise = axios.delete(`${BASE_URL}/sign-out`, config);
  return promise;
}

function getCep(cep) {
  const promise = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return promise;
}

function updateUser(token, body) {
  const config = createHeaders(token);
  const promise = axios.put(`${BASE_URL}/users`, body, config);
  return promise;
}

function updateOrder(token, body, orderId) {
  const config = createHeaders(token);
  const promise = axios.put(`${BASE_URL}/orders/${orderId}`, body, config);
  return promise;
}

function getCartProducts(id, token) {
  const config = createHeaders(token);
  const promise = axios.get(`${BASE_URL}/cart/${id}`, config);
  return promise;
}

function clearCart(id, token) {
  const config = createHeaders(token);
  const promise = axios.delete(`${BASE_URL}/cart/${id}`, config);
  return promise;
}

function updateProductsQuantity(id, token, body) {
  const config = createHeaders(token);
  const promise = axios.put(`${BASE_URL}/cart/${id}`, body, config);
  return promise;
}

function getFinalOrder(token, orderId) {
  const config = createHeaders(token);
  const promise = axios.get(`${BASE_URL}/cart-products/${orderId}`, config);
  return promise;
}

function getOrderDetails(token, orderId) {
  const config = createHeaders(token);
  const promise = axios.get(`${BASE_URL}/checkout/${orderId}`, config);
  return promise;
}

function finishOrder(token, orderId) {
  const config = createHeaders(token);
  const promise = axios.put(`${BASE_URL}/finish-order/${orderId}`, {}, config);
  return promise;
}

function sendEmailConfirmation(token, orderId) {
  const config = createHeaders(token);
  const promise = axios.post(`${BASE_URL}/checkout/${orderId}`, {}, config);
  return promise;
}

export {
  postSignUp,
  postLogin,
  getProducts,
  getProduct,
  requestSignOut,
  getCep,
  updateUser,
  updateOrder,
  updateProductSizes,
  createNewOrder,
  createNewCart,
  getFinalOrder,
  getOrderDetails,
  getCartProducts,
  clearCart,
  updateProductsQuantity,
  finishOrder,
  sendEmailConfirmation,
};
