import React from "react";
import "./hero.css";
import Button from "../../views/button/button";

const Hero = () => {
  return (
    <section className="hero__container">
      <div className="hero__info">
        <div className="header__text-box">
          <h1 className="heading__primary">
            <span className="heading__primary-sub">Buy from our</span>
            <span className="heading__primary-main">Monsoon Collection</span>
            <Button color="var(--primary-green)" className="btn__hero">View Collection</Button>
          </h1>
        </div>
      </div>
      <div className="hero__model" />
    </section>
  );
};

export default Hero;
