import React from "react";
import "./with-signup-card.css";

const withSignUpCard = (Component) => {
  return () => {
    return (
      <div className="signUpCard__container">
        <div className="signUpCard">
          <div className="col-left"></div>
          <div className="col-right">
            <Component />
          </div>
        </div>
      </div>
    );
  };
};

export default withSignUpCard;