import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      <h1>Your Cart Items</h1>
      {cartItems?.map((item) => (
        <CartItem
          id={item.id}
          title={item.title}
          thumbnail={item.thumbnail}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Cart;
