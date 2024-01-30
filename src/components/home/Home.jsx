import React from "react";
import "./Home.css";
import Products from "../products/Products";

const Home = () => {
  return (
    <div className="home">
      <h1 className="productsHeading">Our Products</h1>
      <Products />
    </div>
  );
};

export default Home;