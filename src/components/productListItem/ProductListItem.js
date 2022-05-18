import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, deleteFromFavorite } from "../../app/CatalogSlice";
import ChangeColorButton from "../reusedComponent/changeColorButton/ChangeColorButton";
import LikeButtonMini from "../reusedComponent/likeButtonMini/LikeButtonMini";
import ButtonMain from "../reusedComponent/buttonMain/ButtonMain";

import "./productListItem.scss";

const ProductListItem = ({ data }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { favorite } = useSelector((state) => state.catalog);
  const [checked, setChecked] = useState(false);

  const [colorActive, setColorActive] = useState("");

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
    if (favorite?.find((e) => e.id === data.id)) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [favorite]);

  const favoriteClick = (data) => {
    if (favorite?.findIndex((el) => el.id === data.id) === -1) {
      const newFavorite = {
        title: data.title,
        id: data.id,
        img: data.img[0].imgBig,
      };
      dispatch(addToFavorite(newFavorite));
      setChecked(true);
    } else {
      dispatch(deleteFromFavorite(data.id));
      setChecked(false);
    }
  };

  return (
    <div className="product__item">
      <Link to={`/product/${data.id}`}>
        <img className="item__image" src={data.img[0].img} alt={data.title} />
      </Link>
      <div className="item__title">
        {data.title}
        <div className="item__status">{data.status ? data.status : null}</div>
      </div>
      <div className="item__price">{data.price} грн</div>
      <div className="item__size">
        {data.size.map((item, i) => (
          <button key={i}>{item.size}</button>
        ))}
      </div>
      <div className="item__color">
        {data.color.map((el) => (
          <ChangeColorButton
            key={el.name}
            color={el.name}
            changeNameColor={setColorActive}
          />
        ))}
      </div>
      <Link to={`/product/${data.id}`} className="item__button">
        <ButtonMain text={t("details")} />
      </Link>
      <div className="item__like" onClick={() => favoriteClick(data)}>
        <LikeButtonMini checked={checked} />
      </div>
    </div>
  );
};

export default ProductListItem;
