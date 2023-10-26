import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cart.total);
  return (
    <div>
        <h1>Order Success</h1>
        <h4>Total: {cartTotal}</h4>
    </div>
  );
};

export default Checkout;
