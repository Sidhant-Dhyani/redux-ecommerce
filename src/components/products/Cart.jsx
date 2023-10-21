import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCartItems } from "../../redux/actions/cartThunk";

const Cart = ({ cart, loading, error, fetchCartItems }) => {
  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      <h1>Hello World</h1>

      {cart.map((item) => (
        <h1>{item._id}</h1>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  loading: state.cart.loading,
  error: state.cart.error,
});
const mapDispatchToProps = {
  fetchCartItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
