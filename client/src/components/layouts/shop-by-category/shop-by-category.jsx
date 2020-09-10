import React from "react";
import Category from "../../common/category/category";
import Men from "../../../assets/images/men.jpg";
import Women from "../../../assets/images/women.jpg";
import Kids from "../../../assets/images/kid.jpg";
import "./shop-by-category.css";

const ShopByCategory = () => {
  return (
    <section className="shopby__category">
      <h2 className="shopby__category-header">Shop by category</h2>
      <div className="category__collection">
        <Category img={Men} category="men" />
        <Category img={Women} category="women" />
        <Category img={Kids} category="kids" />
      </div>
    </section>
  );
};

export default ShopByCategory;
