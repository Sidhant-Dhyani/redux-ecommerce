// import axios from "axios";
// import {
//   fetchCartItemsRequest,
//   fetchCartItemsSuccess,
//   fetchCartItemsFailure,
// } from "./cartActions";

// export const fetchCartItems = () => (dispatch) => {
//   dispatch(fetchCartItemsRequest());
//   axios
//     .get("http://localhost:4000/api/cart/get")
//     .then((res) => {
//       dispatch(fetchCartItemsSuccess(res.data));
//     })
//     .catch((error) => {
//       dispatch(fetchCartItemsFailure(error));
//     });
// };
