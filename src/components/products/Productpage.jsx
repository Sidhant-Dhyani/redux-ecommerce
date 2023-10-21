import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import "./Productpage.css";

const Productpage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = location.state;
  const handleAddToCart = () => {
    axios
      .post("http://localhost:4000/api/cart/add", { productId: id })
      .then((res) => {
        console.log(res.data);
        dispatch(addToCart(id));
      })
      .catch((error) => {
        console.error(error);
      });
    console.log({ id });
  };
  return (
    <div className="product-page">
      <div className="images-section">
        {images && images.length > 0 ? (
          <ul className="images-list">
            {images.map((image, index) => (
              <li key={index}>
                <img src={image} alt={`Product Images ${index}`} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="product-thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">
          Price: ${price}
          {discountPercentage > 0 && (
            <span className="product-discount">
              , {discountPercentage}% Off
            </span>
          )}
        </p>
        <p className="product-rating">Rating: {rating}/5 stars</p>
        <p className="product-stock">In Stock: {stock} items</p>
        <p className="product-brand">Brand: {brand}</p>
        <p className="product-category">Category: {category}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Productpage;
