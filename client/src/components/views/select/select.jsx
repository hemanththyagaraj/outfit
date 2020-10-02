import React from "react";
import "./select.css";

const Select = ({ options = [], label = "Select", ...rest }) => {
  return (
    <>
      <select className="outfit__select" {...rest}>
        <option value="" disabled selected>
          {label}
        </option>
        {options.map((option) => {
          return (
            <option className="outfit__option" value={option.value} key={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
