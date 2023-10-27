
import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartTotal = useSelector((state) => state.cart.total);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const token = useSelector((state) => state.token);
  const Navigate = useNavigate();
  const handleCheckout = () => {
    Navigate("/shippingpage");
  };
  return (
    <div>
      <h1>Your Cart Items</h1>
      {cartItems?.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          thumbnail={item.thumbnail}
          price={item.price}
          qty={item.qty}
        />
      ))}
      <h4 className="total">Cart Total: ${cartTotal}</h4>
      <button className="checkout-button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;

