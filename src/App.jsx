
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Productpage from "./components/products/Productpage";
import Cart from "./components/cart/Cart";

import { useDispatch } from "react-redux";
import { userLogin } from "./redux/actions/auth-actions";
import Checkout from "./components/checkout/Checkout";
import ShippingForm from "./components/checkout/ShippingForm";

function App() {
  const dispatch = useDispatch();
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    dispatch(userLogin(storedToken));
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productpage" element={<Productpage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shippingpage" element={<ShippingForm />} />
        <Route path="/checkoutpage" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;

