import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import SignInPage from './pages/SignInPage/SignInPage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import PlaceOrderPage from './pages/PlaceOrderPage/PlaceOrderPage';
import AuthHOC from './hoc/AuthHOC/AuthHOC';
import OrderPage from './pages/OrderPage/OrderPage';

function App() {
  return (
    <Router >
      <Routes>
        <Route path = "/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        {/* <Route path='/signup' element={<SignUpPa} */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element= {<AuthHOC><CheckoutPage/></AuthHOC>} />
        <Route path="/placeorder" element = {<PlaceOrderPage />} />
        <Route path="/orders" element = {<AuthHOC><OrderPage /></AuthHOC>} />
      </Routes>
    </Router>
  );
}

export default App;
