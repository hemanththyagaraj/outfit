import React from "react";
import Logo from "../../../assets/svgs/logo__light.svg";
import Git from "../../../assets/svgs/github.svg";
import Twitter from "../../../assets/svgs/twitter.svg";
import Instagram from "../../../assets/svgs/instagram.svg";
import "./style.css";

const Footer = () => {
  const handleRedirect = (event) => {
    const { name } = event.target;
    window.open(name, "_blank");
  };

  return (
    <div className="footer">
      <img src={Logo} className="outfit__logo" alt="logo" />
      <h2 className="title">One shop for all your clothing needs.</h2>
      <h2 className="title">Copyright 2020 | Shop.</h2>
      <div className="social__media-container">
        <img
          src={Instagram}
          alt="instagram"
          className="social__media-icon instagram"
          name="https://www.instagram.com/hemanththyagaraj/"
          onClick={handleRedirect}
        />
        <img
          src={Twitter}
          alt="twitter"
          className="social__media-icon"
          name="https://twitter.com/hemanththyagraj"
          onClick={handleRedirect}
        />
        <img
          src={Git}
          alt="git"
          className="social__media-icon"
          name="https://github.com/hemanththyagaraj"
          onClick={handleRedirect}
        />
      </div>
    </div>
  );
};

export default Footer;
