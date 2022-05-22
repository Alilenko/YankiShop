import React from "react";
import "./buttonOutline.scss";

const ButtonOutline = ({ text, img, onClick }) => {
  return (
    <button onClick={onClick} className="button-outline">
      {img ? <div className="button-img">{img}</div> : null}
      {text}
    </button>
  );
};

export default ButtonOutline;
