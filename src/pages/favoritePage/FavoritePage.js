import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FavoriteItem from "../../components/favoriteItem/FavoriteItem";

import "./favoritePage.scss";

const FavoritePage = () => {
  const { favorite } = useSelector((state) => state.catalog);

  let getLocal = JSON.parse(localStorage.getItem("favorite"));

  console.log(getLocal);
  return (
    <div className="container">
      <div className="favorite__list">
        {getLocal ? (
          getLocal?.map((item, i) => <FavoriteItem key={item.id} data={item} />)
        ) : (
          <div>No</div>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
