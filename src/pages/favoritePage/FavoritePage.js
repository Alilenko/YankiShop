import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromFavorite } from "../../app/CatalogSlice";
import FavoriteItem from "../../components/favoriteItem/FavoriteItem";

import "./favoritePage.scss";

const FavoritePage = () => {
  const { favorite } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  const deleteFavorite = (data) => {
    dispatch(deleteFromFavorite(data.id));
  };

  return (
    <div className="container">
      <div className="favorite__list">
        {favorite ? (
          favorite?.map((item, i) => (
            <FavoriteItem
              key={item.id}
              data={item}
              deleteFavorite={deleteFavorite}
            />
          ))
        ) : (
          <div>No</div>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
