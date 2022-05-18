import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";

import "./favoriteItem.scss";
import ButtonMain from "../reusedComponent/buttonMain/ButtonMain";

const FavoriteItem = ({ data, deleteFavorite }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="favorite__item">
      <img className="favorite__img" src={data.img} />
      <div className="favorite__title">{data.title}</div>
      <Link to={`/product/${data.id}`} className="favorite__link">
        <ButtonMain text={t("details")} />
      </Link>
      <button className="favorite__close" onClick={() => deleteFavorite(data)}>
        <IoClose />
      </button>
    </div>
  );
};

export default FavoriteItem;
