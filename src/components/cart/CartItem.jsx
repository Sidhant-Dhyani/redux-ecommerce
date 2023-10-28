import React from "react";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementToCart,
  decrementToCart,
} from "../../redux/actions/cartActions";

const CartItem = ({ id, title, thumbnail, price, qty }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id }));
  };
  const handleIncreaseItem = () => {
    dispatch(incrementToCart({ id, title, thumbnail, price }));
  };
  const handleDecreaseItem = () => {
    dispatch(decrementToCart({ id, title, thumbnail, price }));
  };
  return (
    <div className="cart-item" key={id}>
      <img className="thumbnail" src={thumbnail} alt={title} />
      <div className="cart-item-details">
        <p className="title">{title}</p>
        <p className="price">Price: ${price}</p>
        <div className="quantity-controls">
          <button className="control-button" onClick={handleRemoveFromCart}>
            Remove
          </button>
          <button className="control-button" onClick={handleIncreaseItem}>
            +
          </button>
          <p className="quantity">Quantity: {qty}</p>
          <button className="control-button" onClick={handleDecreaseItem}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
