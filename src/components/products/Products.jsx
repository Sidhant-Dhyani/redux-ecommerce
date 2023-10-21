import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/actions/productsThunk";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

const Products = ({ products, loading, error, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div>
      {products.map((product) => (
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
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  loading: state.product.loading,
  error: state.product.error,
});
const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
