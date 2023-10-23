import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const cartTotal = useSelector((state) => state.cart.total);
  const cartItems = useSelector((state) => state.cart.cartItems);
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
      <h4>Cart Total: {cartTotal}</h4>
    </div>
  );
};

export default Cart;
