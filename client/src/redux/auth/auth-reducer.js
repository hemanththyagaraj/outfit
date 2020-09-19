import { AUTH_FAIL, AUTH_SUCCESS, CLEAR_ERROR, LOGOUT, REQUEST_AUTH } from "./auth-types";

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

    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };

    case AUTH_FAIL:
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

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return { ...state };
  }
};

export default authReducer;
