import React from "react";
import './input.css'

const Input = ({ type = 'text', label, ...rest }) => {
  return (
    <>
      <input type={type} { ...rest } className="outfit__input" />
    </>
  );
};

export default Input;
