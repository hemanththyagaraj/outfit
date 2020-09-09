import React, { useState } from "react";
import Logo from "../../../assets/svgs/logo.svg";
import NavList from "./nav-list";
import NavItem from "./nav-item";
import "./style.css";
import DropdownItem from "../../common/drop-down-menu/drop-down-item";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleClick = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <header className="outfit__header">
      <img src={Logo} className="outfit__logo" alt="logo" />
      <label htmlFor="hamburger__checkbox" className="hamburger__label">
        &#9776;
      </label>
      <input
        type="checkbox"
        id="hamburger__checkbox"
        checked={isChecked}
        onChange={handleCheck}
      />
      <NavList>
        <NavItem name="Home" to="/" onClick={handleClick} />
        <NavItem name="Products" onClick={handleClick}>
          <DropdownItem to="/men" onClick={handleClick}>
            Men
          </DropdownItem>
          <DropdownItem to="/women" onClick={handleClick}>
            Women
          </DropdownItem>
          <DropdownItem to="/kids" onClick={handleClick}>
            Kids
          </DropdownItem>
        </NavItem>
        <NavItem name="About us" to="/about_us" onClick={handleClick} />
        <NavItem name="Login" to="/login" onClick={handleClick} />
        <NavItem name="Register" to="/register" onClick={handleClick} />
      </NavList>
      <div className="nav__background" />
    </header>
  );
};

export default Navbar;
