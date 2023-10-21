export const addToCart = (productId) => {
  return {
    type: "ADD_TO_CART",
    payload: productId,
  };
};

export const fetchCartItemsRequest = () => ({
  type: "FETCH_CART_ITEMS_REQUEST",
});

export const fetchCartItemsSuccess = (items) => ({
  type: "FETCH_CART_ITEMS_SUCCESS",
  payload: items,
});

export const fetchCartItemsFailure = (error) => ({
  type: "FETCH_CART_ITEMS_Failure",
  error,
});