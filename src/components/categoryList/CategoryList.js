import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./categoryList.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../app/CatalogSlice";

const CategoryList = () => {
  const { t, i18n } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="category__list">
      <button onClick={() => setIsActive(!isActive)}>{t("filters")}</button>
      <div className={isActive ? "category__link active" : "category__link"}>
        <div
          className="category__filter"
          onClick={() => dispatch(changeCategory("all"))}
        >
          {t("category-list.category-all")}
        </div>
        <div
          className="category__filter"
          onClick={() => dispatch(changeCategory("jackets"))}
        >
          {t("category-list.outerwear")}
        </div>
        <div
          className="category__filter"
          onClick={() => dispatch(changeCategory("coat"))}
        >
          {t("category-list.coat")}
        </div>
        <div
          className="category__filter"
          onClick={() => dispatch(changeCategory("trench"))}
        >
          {t("category-list.trench coats")}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
