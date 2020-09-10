import React from "react";
import Dress from "../../../assets/images/dress.png";
import Pay from "../../../assets/images/credit-card.png";
import Truck from "../../../assets/images/truck.png";
import "./style.css";

const Feature = () => {
  return (
    <div className="feature__container">
      <h2 className="feature__header">Our features</h2>
      <div className="features__collection">
        <div className="feature">
          <img src={Truck} alt="Dress" className="feature__icon" />
          <h2 className="title">Free shipping method</h2>
          <p className="sub__title">Free and fast across the country</p>
        </div>
        <div className="feature">
          <img src={Pay} alt="Dress" className="feature__icon" />
          <h2 className="title">Secure payment system</h2>
          <p className="sub__title">
            Dont worry. You payments are safe with us.
          </p>
        </div>
        <div className="feature">
          <img src={Dress} alt="Dress" className="feature__icon" />
          <h2 className="title">Premium products</h2>
          <p className="sub__title">
            We sell only premium products that lasts for a lifetime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
