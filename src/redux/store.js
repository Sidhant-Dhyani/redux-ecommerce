
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import productReducer from "./reducers/productReducer";
import thunk from "redux-thunk";

const middleware = () => getDefaultMiddleware().concat(thunk);
const store = configureStore({
  reducer: {
    token: authReducer,
    product: productReducer,
  },
  middleware,
});

export default store;

