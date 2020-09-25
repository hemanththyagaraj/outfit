import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../../assets/svgs/logo.svg";
import NavList from "./nav-list";
import NavItem from "./nav-item";
import DropdownItem from "../../common/drop-down-menu/drop-down-item";
import { logout } from "../../../redux/auth/auth-actions";
import "./navbar.css";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const avatar = isAuthenticated ? `"${user.avatar}"` : ''

  const dispatch = useDispatch();

  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleClick = () => {
    setIsChecked((prevState) => !prevState);
  };

  const handleLogout = () => {
    dispatch(logout());
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
        <NavItem name="Products">
          <DropdownItem to="/shop/men" onClick={handleClick}>
            Men
          </DropdownItem>
          <DropdownItem to="/shop/women" onClick={handleClick}>
            Women
          </DropdownItem>
          <DropdownItem to="/shop/kids" onClick={handleClick}>
            Kids
          </DropdownItem>
        </NavItem>
        <NavItem name="About us" to="/about_us" onClick={handleClick} />
        {!isAuthenticated ? (
          <>
            <NavItem name="Login" to="/login" onClick={handleClick} />
            <NavItem name="Register" to="/register" onClick={handleClick} />
          </>
        ) : (
          <>
            <NavItem name="Logout" to="/" onClick={handleLogout} />
            <div className="nav__profile-info">
              <div
                className="nav__profile-img"
                style={{ backgroundImage: `url(${avatar})` }}
              />
              <span className="nav__profile-name">{user ? user.name : ""}</span>
            </div>
          </>
        )}
      </NavList>
      <div className="nav__background" />
    </header>
  );
};

export default Navbar;
