import React, { useContext } from "react";
import { AlertContext } from "../../../context/alert/alert-state";
import "./alert.css";

const Alert = () => {
  const { message, type, isShown, hideAlert } = useContext(AlertContext);

  return (
    <>
      {isShown && (
        <div className={`alert__container ${type}`}>
          <p>{message}</p>
          <span className="btn__close" onClick={hideAlert}>&times;</span>
        </div>
      )}
    </>
  );
};

export default Alert;
