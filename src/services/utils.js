import productsData from './productsData';

function formatePrice(price) {
  const value = price.toString();
  const arr = value.split('');
  arr[arr.length - 2] = ',';
  arr.push('0');
  return arr.join('');
}

function loadImg(name) {
  let img;
  switch (name) {
    case 'Camisa Lacoste':
      img = productsData[0].url;
      break;
    case 'Calça Lacoste':
      img = productsData[1].url;
      break;
    case 'Camisa Dudalina':
      img = productsData[2].url;
      break;
    case 'Calça Dudalina':
      img = productsData[3].url;
      break;
    case 'Camisa Aramis':
      img = productsData[4].url;
      break;
    case 'Calça Aramis':
      img = productsData[5].url;
      break;
    default:
      break;
  }

  return img;
}

function calculateTotalOrder(products) {
  let totalPrice = 0;
  products.forEach((p) => {
    totalPrice += p.product_value * p.product_qty;
  });
  return totalPrice;
}

export { formatePrice, loadImg, calculateTotalOrder };
