import {
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REQUEST_AUTH,
} from "./auth-types";

const initialState = {
  loading: false,
  isAuthenticated: !!JSON.parse(localStorage.getItem("user")),
  user: JSON.parse(localStorage.getItem("user")),
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_AUTH:
      return { ...state, loading: true, error: null };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null,
      };

    default:
      return { ...state };
  }
};

export default authReducer;
