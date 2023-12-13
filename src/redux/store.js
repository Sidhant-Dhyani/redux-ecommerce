
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import cartReducer from "./reducers/cartReducer";
const store = configureStore({
  reducer: {
    token: authReducer,
    cart: cartReducer,
  },
});

export default store;