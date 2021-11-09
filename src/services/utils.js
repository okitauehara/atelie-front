function formatePrice(price) {
  const value = price.toString();
  const arr = value.split('');
  arr[arr.length - 2] = ',';
  arr.push('0');
  return arr.join('');
}

export default formatePrice;
