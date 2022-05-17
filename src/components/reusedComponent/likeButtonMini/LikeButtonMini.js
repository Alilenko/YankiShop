import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./likeButtonMini.scss";

const LikeButtonMini = ({ checked }) => {
  return (
    <button className="like__button">
      {checked ? <FaHeart color="#fff" /> : <FaRegHeart color="#fff" />}
    </button>
  );
};

export default LikeButtonMini;
