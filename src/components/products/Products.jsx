import React, { useState, useEffect } from "react";
import "./Products.css";
import BASE_URL from '../../config';
import ProductCard from "./ProductCard";
import Filter from "../products/Filter";
import axios from "axios";

const Products = () => {
  const [visibleEntries, setVisibleEntries] = useState(5);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    brand: "",
    category: "",
    sort: "",
  });
  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  const queryParams = `?minPrice=${filters.minPrice}&maxPrice=${filters.maxPrice}&category=${filters.category}&brand=${filters.brand}&sort=${filters.sort}`;

  const url = `${BASE_URL}/api/products/getFilteredProducts/${queryParams}`;

  axios
    .get(url)
    .then((res) => {
      const filteredProducts = res.data;
      setFilteredProducts(filteredProducts);
      setIsloading(false);
    })
    .catch((error) => {
      console.log(error);
    });

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 10
      ) {
        setVisibleEntries(prevVisibleEntries => prevVisibleEntries + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>
            <Filter filters={filters} onFilterChange={handleFilterChange} />
          </div>
          <div className="products_list">
            <div className="grid_list">
              {filteredProducts.slice(0, visibleEntries).map((product) => (
                <ProductCard
                  id={product._id}
                  key={product._id}
                  thumbnail={product.thumbnail}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  category={product.category}
                  description={product.description}
                  discountPercentage={product.discountPercentage}
                  stock={product.stock}
                  brand={product.brand}
                  images={product.images}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
