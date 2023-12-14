
import {USER_LOGIN, USER_LOGOUT} from "./auth-actions-types"

export const userLogin = (token) => {
  return {
    type: USER_LOGIN,
    payload: token,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
