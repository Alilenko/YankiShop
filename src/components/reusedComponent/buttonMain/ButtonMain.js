import React from "react";
import "./buttonMain.scss";

const ButtonMain = ({ text, onClick }) => {
  return (
    <button type="submit" onClick={onClick} className="button-main">
      {text}
    </button>
  );
};

export default ButtonMain;
