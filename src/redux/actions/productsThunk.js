import axios from "axios";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "./productsActions";

export const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductsRequest());
  axios
    .get("http://localhost:4000/api/products/getFilteredProducts")
    .then((response) => {
      dispatch(fetchProductsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchProductsFailure(error));
    });
};
