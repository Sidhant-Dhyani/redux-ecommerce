import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Filter from "../products/Filter";
import axios from "axios";

const Products = () => {
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

  const url = `https://redux-ecommerce-backend-nu.vercel.app/api/products/getFilteredProducts/${queryParams}`;

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

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>
            <Filter filters={filters} onFilterChange={handleFilterChange} />
          </div>
          <div>
            {filteredProducts.map((product) => (
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
      )}
    </div>
  );
};

export default Products;
