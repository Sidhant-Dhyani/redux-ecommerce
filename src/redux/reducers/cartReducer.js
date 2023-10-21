const initialState = {
  cart: [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  // switch (action.type) {
  //   case "ADD_TO_CART":
  //     return {
  //       ...state,
  //       cart: [...state.cart, action.payload],
  //     };
  //   default:
  //     return state;
  // }
  switch (action.type) {
    case "FETCH_CART_ITEMS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_CART_ITEMS_SUCCESS":
      return { ...state, loading: false, cart: action.payload };
    case "FETCH_CART_ITEMS_FAILURE":
      return { ...state, loading: true, error: action.error };
    default:
      return state;
  }
};

export default cartReducer;
