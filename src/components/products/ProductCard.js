import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  title,
  description,
  price,
  rating,
  category,
  thumbnail,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="product-card" onClick={handleClick}>
      <img src={thumbnail} alt={title} />
      <div className="product-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="category">Category: {category}</p>
        <div className="price-rating">
          <p className="price">Price: ${price}</p>
          <p className="rating">Rating: {rating} stars</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
