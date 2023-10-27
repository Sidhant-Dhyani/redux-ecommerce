
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  total: localStorage.getItem("total"),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
    case "INCREASE_QUANTITY":
    case "DECREASE_QUANTITY":
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: action.payload.cartItems,
        total: calculateTotal(action.payload.cartItems),
      };
    default:
      return state;
  }
};

const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => {
    localStorage.setItem(
      "total",
      JSON.stringify(total + item.qty * item.price)
    );
    return total + item.qty * item.price;
  }, 0);
};

export default cartReducer;

