import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import ProductListItem from "../productListItem/ProductListItem";

import "./productList.scss";

const ProductList = () => {
  const { search } = useSelector((state) => state.catalog);

  const filteredNav = createSelector(
    (state) => state.catalog.category,
    (state) => state.catalog.goods,
    (filter, goods) => {
      if (filter === "all") {
        return goods;
      } else if (filter === "coat") {
        return goods.filter((item) => item.category === "coat");
      } else if (filter === "trench") {
        return goods.filter((item) => item.category === "trench");
      } else if (filter === "jackets") {
        return goods.filter((item) => item.category === "jackets");
      } else {
        return goods;
      }
    }
  );
  const filterGoods = useSelector(filteredNav);
  const searchGoods = filterGoods.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product__list">
      {searchGoods.map((item) => (
        <ProductListItem data={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
