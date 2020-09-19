import axios from "axios";
import { AUTH_FAIL, AUTH_SUCCESS, CLEAR_ERROR, LOGOUT, REQUEST_AUTH } from "./auth-types";
import { urls } from "../../config/urls";

// All action creators for authentication

const request = () => {
  return {
    type: REQUEST_AUTH,
  };
};

const authSuccess = (user) => {
  return {
    type: AUTH_SUCCESS,
    payload: user,
  };
};

const authFailure = (message) => {
  return {
    type: AUTH_FAIL,
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
      dispatch(authSuccess(user));
    } catch (error) {
      const err = error.response;
      dispatch(authFailure(err.data.message));
    }
  };
};

export const login = (payload) => {
  return async (dispatch) => {
    try {
      const {
        data: { user },
      } = await axios.post(urls.login, payload);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(authSuccess(user));
    } catch (error) {
      const {
        data: { message },
      } = error.response;
      dispatch(authFailure(Array.isArray(message) ? message[0].msg : message));
    }
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
}

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
