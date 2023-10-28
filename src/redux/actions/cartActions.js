
export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  const indexOfItem = cartItems.findIndex((item) => item.id === product.id);
  if (indexOfItem !== -1) {
    const updatedCartItems = [...cartItems];
    const updatedItem = { ...updatedCartItems[indexOfItem] };
    updatedItem.qty += 1;
    updatedCartItems[indexOfItem] = updatedItem;
    dispatch({
      type: "ADD_TO_CART",
      payload: { cartItems: updatedCartItems },
    });
  } else {
    const newItem = { ...product, qty: 1 };
    cartItems.push(newItem);
    dispatch({
      type: "ADD_TO_CART",
      payload: { cartItems },
    });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x.id !== product.id);
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const incrementToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  const indexOfItem = cartItems.findIndex((item) => item.id === product.id);
  const updatedCartItems = [...cartItems];
  const updatedItem = { ...updatedCartItems[indexOfItem] };
  updatedItem.qty += 1;
  updatedCartItems[indexOfItem] = updatedItem;
  dispatch({
    type: "INCREASE_QUANTITY",
    payload: { cartItems: updatedCartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
};

export const decrementToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  const indexOfItem = cartItems.findIndex((item) => item.id === product.id);
  const updatedCartItems = [...cartItems];
  const updatedItem = { ...updatedCartItems[indexOfItem] };
  if (updatedItem.qty > 1) {
    updatedItem.qty -= 1;
    updatedCartItems[indexOfItem] = updatedItem;
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: { cartItems: updatedCartItems },
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  } else {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
};

