import React from "react";
import "./CartItem.css";
import { connect, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementToCart,
} from "../../redux/actions/cartActions";

const CartItem = ({ id, title, thumbnail, price }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id }));
  };
  const handleIncreaseItem = () => {
    console.log("hello");
    incrementToCart({id});
  };
  return (
    <div key={id}>
      <p>{title}</p>
      <p>Price: ${price}</p>
      <img src={thumbnail} alt="" />
      <button onClick={handleRemoveFromCart}>Remove</button>
      <button onClick={handleIncreaseItem}>+</button>
    </div>
  );
};

export default connect(null, { removeFromCart, incrementToCart })(CartItem);
