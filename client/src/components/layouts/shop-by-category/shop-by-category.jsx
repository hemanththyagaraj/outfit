import React from "react";
import "./shop-by-category.css";

const ShopByCategory = () => {
  return (
    <section className="shopby__category">
      <h2 className="shopby__category-header">Shop by category</h2>
      <div className="category__container">
        <div className="category__item">
          <div className="img__container category__men" />
          <button className="exlpore__more">Shop now</button>
          <div className="category_title">Men</div>
        </div>
        <div className="category__item">
          <div className="img__container category__women" />
          <button className="exlpore__more">Shop now</button>
          <div className="category_title">Women</div>
        </div>
        <div className="category__item">
          <div className="img__container category__kids" />
          <button className="exlpore__more">Shop now</button>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
