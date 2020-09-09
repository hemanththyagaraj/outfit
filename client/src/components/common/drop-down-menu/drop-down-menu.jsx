import React from "react";
import "./style.css";

const DropdownMenu = (props) => {
  return <ul className="dropdown__menu">{props.children}</ul>;
};

export default DropdownMenu;
