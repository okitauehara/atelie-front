import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/home/:productId" element={<Product />} />
      <Route path="/cart/:orderId" element={<Cart />} />
      <Route path="/payment/:orderId" element={<Payment />} />
      <Route path="/checkout/:orderId" element={<Checkout />} />
    </Routes>
  );
}

export default Pages;
