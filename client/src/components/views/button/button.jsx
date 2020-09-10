import React from "react";
import "./button.css";

const Button = (props) => {
  const {
    variant = "contained",
    size = "large",
    color = "black",
    className = "",
    onClick,
  } = props;
  return (
    <button
      {...props}
      onClick={onClick}
      className={`
                outfit__button
                ${size}
                ${variant}
                ${className}
                `}
      style={{
        ...props.style,
        color: variant === "contained" ? "white" : `${color}`,
        backgroundColor: variant === "contained" ? color : "none",
        border: variant === "outlined" ? `2px solid ${color}` : "none",
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
