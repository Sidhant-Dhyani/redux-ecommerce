import React, { useState, useEffect } from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import BASE_URL from '../../config';
import ProductCard from "./ProductCard";
import Filter from "../products/Filter";
import axios from "axios";

const Products = () => {
  // const [visibleEntries, setVisibleEntries] = useState(5);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');
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

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setIsloading(true);
    axios.get(`${BASE_URL}/api/products/searchProducts?keywords=${search}`)
      .then((res) => {
        const searchResults = res.data;
        console.log(searchResults);
        console.log(true);
        setFilteredProducts(searchResults);
        console.log(false);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err)
        setIsloading(false);
      });
  }

  useEffect(() => {
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
  }, [search, filters]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop >=
  //       document.documentElement.offsetHeight - 10
  //     ) {
  //       setVisibleEntries(prevVisibleEntries => prevVisibleEntries + 1);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="input_home">
            <input className="inputBar_home" type="text" placeholder="search" value={search} onChange={handleSearchChange} />
            <FontAwesomeIcon className="magnifyingIcon" icon={faMagnifyingGlass} onClick={handleSearch} />
          </div>
          <div>
            <Filter filters={filters} onFilterChange={handleFilterChange} />
          </div>
          <div className="products_list">
            <div className="grid_list">
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
        </div>
      )}
    </div>
  );
};

export default Products;