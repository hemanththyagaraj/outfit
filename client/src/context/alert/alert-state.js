import React, { createContext, useReducer } from "react";
import Alert from "../../components/views/alert/alert";
import alertReducer from "./alert-reducer";
import { HIDE_ALERT, SHOW_ALERT } from "./alert-types";

export const AlertContext = createContext();

const AlertProvider = (props) => {
  const iniatialState = {
    isShown: false,
    type: "success",
    message: "",
  };

  const [state, dispatch] = useReducer(alertReducer, iniatialState);

  const hide = () => {
    return {
      type: HIDE_ALERT,
    };
  };

  const show = (type, message) => {
    return {
      type: SHOW_ALERT,
      payload: { type, message },
    };
  };

  const hideAlert = () => {
    dispatch(hide());
  };

  const setAlert = (type, message, duration = 3000) => {
    dispatch(show(type, message));

    setTimeout(() => {
      dispatch(hide());
    }, duration);
  };

  return (
    <AlertContext.Provider value={{ setAlert, hideAlert, ...state }}>
      <Alert />
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
