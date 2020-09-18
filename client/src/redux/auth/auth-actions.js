import axios from "axios";
import {
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REQUEST_AUTH,
} from "./auth-types";
import { urls } from "../../config/urls";

// All action creators for authentication

export const request = () => {
  return {
    type: REQUEST_AUTH,
  };
};

export const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
};

export const registerFailure = (message) => {
  return {
    type: REGISTER_FAIL,
    payload: message,
  };
};

export const register = (payload) => {
  return async (dispatch) => {
    dispatch(request());
    try {
      const {
        data: { user },
      } = await axios.post(urls.registerUser, payload);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(registerSuccess(user));
    } catch (error) {
      const err = error.response;
      dispatch(registerFailure(err.data.message));
    }
  };
};

export const userLogout = () => {
  return {
    type: LOGOUT,
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("user");
    dispatch(userLogout());
  };
};
