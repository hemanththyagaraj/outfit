import React from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../../common/drop-down-menu/drop-down-menu";
import "./style.css";

const NavItem = (props) => {
  const { onClick, to, name } = props;

  return (
    <li className="nav__item">
      <Link className="nav__link" to={`${to}`} onClick={onClick}>
        {name}
      </Link>
      {props.children && <span className="arrow__bottom" />}
      {props.children && <DropdownMenu>{props.children}</DropdownMenu>}
    </li>
  );
};

export default NavItem;
