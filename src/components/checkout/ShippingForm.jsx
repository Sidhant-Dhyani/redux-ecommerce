import React, { useState } from "react";
import "./ShippingForm.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";
const ShippingForm = () => {
  const cartTotal = useSelector((state) => state.cart.total);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const token = useSelector((state) => state.token);
  const decodedToken = token && token.token ? jwt_decode(token.token) : null;
  const userID = decodedToken ? decodedToken.id : null;
  const Navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (token.token === null) {
      alert("Please log in to proceed with checkout.");
      Navigate("/login");
    } else {
      try {
        const response = await axios.post(
          "https://redux-ecommerce-backend-wheat.vercel.app/api/checkout/order",
          {
            name: shippingInfo.name,
            address: shippingInfo.address,
            city: shippingInfo.city,
            state: shippingInfo.state,
            postal_code: shippingInfo.postalCode,
            contact_phone: shippingInfo.contactNumber,
            user: userID,
            totalPrice: cartTotal,
            products: cartItems,
          }
        );
        if (response.status === 200) {
          console.log("Order Created Successfully!!");
          Navigate("/checkoutpage");
        } else {
          console.log();
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <div>
      <h2 className="ship-heading">Shipping Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={shippingInfo.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={shippingInfo.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={shippingInfo.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={shippingInfo.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="postalCode">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={shippingInfo.postalCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={shippingInfo.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Proceed To Checkout</button>
      </form>
    </div>
  );
};

export default ShippingForm;
