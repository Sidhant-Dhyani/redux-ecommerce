import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Products from "../products/Products";
import Filter from "../products/Filter";

const Home = () => {
  return (
    <div className="home">
      <div className="input">
        <input className="inputBar" type="text" placeholder="search" />
        <FontAwesomeIcon className="magnifyingIcon" icon={faMagnifyingGlass} />
      </div>
      <h1 className="productsHeading">Our Products</h1>
      <Filter />
      <Products />
    </div>
  );
};

export default Home;
