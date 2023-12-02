import React from "react";
import { useProductsContext } from "../context/products_context";
import {
  FeaturedProducts,
  Hero,
  Services,
  Contact,
  Slider,
} from "../components";
const HomePage = () => {
  const { clearSearch } = useProductsContext();
  return (
    <main onClick={clearSearch}>
      <Slider />
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
