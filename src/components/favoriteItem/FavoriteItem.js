import React from "react";
import { Link } from "react-router-dom";

import "./favoriteItem.scss";

const FavoriteItem = ({ data }) => {
  return (
    <Link to={`/product/${data.id}`} className="favorite__item">
      <img className="favorite__img" src={data.img} />
      <div className="favorite__title">{data.title}</div>
    </Link>
  );
};

export default FavoriteItem;
