export const userLogin = (token) => {
  return {
    type: "LOGIN",
    payload: token,
  };
};

export const userLogout = () => {
  return {
    type: "LOGOUT",
  };
};

