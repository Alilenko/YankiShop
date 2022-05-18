import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setCurrentGoods } from "../../app/CatalogSlice";

import ProductContent from "../../components/productContent/ProductContent";
import ProductImage from "../../components/productImage/ProductImage";
import ProductList from "../../components/productList/ProductList";

import "./productPage.scss";

const ProductPage = () => {
  const { goods, currentGoods } = useSelector((state) => state.catalog);
  const path = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentGoods(path.id));
  }, [path]);

  return (
    <div className="container">
      <div className="product ">
        <div className="product__left">
          {currentGoods.map((item) => (
            <ProductImage key={item.title} img={item.img} />
          ))}
        </div>
        <div className="product__right">
          <ProductContent key={currentGoods[0].id} item={currentGoods[0]} />
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default ProductPage;
