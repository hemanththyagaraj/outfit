import React from "react";
import { useHistory } from "react-router-dom";

const DropdownItem = (props) => {
  const history = useHistory();
  const { onClick, to } = props;

  const handleClick = () => {
    onClick();
    history.push(to);
  };

  return (
    <li className="dropdown__item" onClick={handleClick}>
      {props.children}
    </li>
  );
};

export default DropdownItem;
