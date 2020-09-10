import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../../common/drop-down-menu/drop-down-menu";
import "./style.css";

const NavItem = (props) => {
  const [showDropown, setShowDropdown] = useState(false);
  const { onClick, to, name } = props;

  return (
    <li className="nav__item">
      {!props.children && (
        <Link className="nav__link" to={`${to}`} onClick={onClick}>
          {name}
        </Link>
      )}
      {props.children && (
        <span onClick={() => setShowDropdown(!showDropown)}>{name}</span>
      )}
      {props.children && <span className="arrow__bottom" />}
      {props.children && showDropown ? (
        <DropdownMenu>{props.children}</DropdownMenu>
      ) : (
        ""
      )}
    </li>
  );
};

export default NavItem;
