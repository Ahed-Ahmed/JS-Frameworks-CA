import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view: grid } = useFilterContext();
  if (products < 1) {
    return (
      <h5
        style={{
          textTrsansform: "none",
        }}
      >
        Sorry, there is nothing that you have serached for...
      </h5>
    );
  }
  if (grid === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products} />;
};

export default ProductList;
