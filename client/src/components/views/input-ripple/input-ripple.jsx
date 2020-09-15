import React from "react";
import "./style.css";

const InputRipple = React.forwardRef((props, ref) => {
  const { type = "text", label = "label", id, onChange, ...rest } = props;
  return (
    <div className="ripple__container">
      <input
        type={type}
        id={id}
        className="ripple__input"
        placeholder=" "
        autoComplete="off"
        ref={ref}
        onChange={onChange}
        {...rest}
      />
      <label htmlFor={id} className="ripple__label">
        {label}
      </label>
      <div className="highlight" />
    </div>
  );
});

export default InputRipple;
