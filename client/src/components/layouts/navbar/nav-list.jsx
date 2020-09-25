import React from "react";
import "./navbar.css";

const NavList = (props) => {
  return (
    <nav>
      <ul className="nav__list-container">{props.children}</ul>
    </nav>
  );
};

export default NavList;
