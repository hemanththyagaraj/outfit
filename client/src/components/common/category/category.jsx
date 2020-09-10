import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../views/button/button";
import "./style.css";

const Category = (props) => {
  const history = useHistory();
  const { img, category } = props;

  const handleClick = (e) => {
    history.push(`/shop/${category}`);
  };

  return (
    <div className="category__container">
      <div className="background__container">
        <div
          className="background"
          style={{ backgroundImage: `url(${img})` }}
        />
        <Button
          className="btn__viewall"
          variant="contained"
          color="var(--primary-green)"
          size="medium"
          onClick={handleClick}
          name="btn"
        >
          View all
        </Button>
      </div>
      <h2 className="category__type">{category}</h2>
    </div>
  );
};

export default Category;
