import React from "react";
import Hero from "../../components/layouts/hero/hero";
import ShopByCategory from "../../components/layouts/shop-by-category/shop-by-category";
import Feature from "../../components/layouts/feature/feature";
import Footer from "../../components/layouts/footer/footer";

const Landing = () => {
  return (
    <>
      <Hero />
      <ShopByCategory />
      <Feature />
      <Footer />
    </>
  );
};

export default Landing;
