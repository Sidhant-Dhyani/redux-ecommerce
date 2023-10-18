
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";

const store = configureStore({
  reducer: {
    token: authReducer
  },
});

export default store;

