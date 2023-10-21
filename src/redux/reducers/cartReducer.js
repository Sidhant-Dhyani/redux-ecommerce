const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    qty: 0,
    total: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cartItems: action.payload.cartItems };
    case "INCREASE_QUANTITY":
      return { cartItems: action.payload.cartItems };

    // case "DECREASE_QUANTITY":
    //   return { cartItems: action.payload.cartItems };

    case "REMOVE_FROM_CART":
      return { cartItems: action.payload.cartItems };
    default:
      return state;
  }
};

export default cartReducer;
