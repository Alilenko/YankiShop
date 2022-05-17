import React from "react";
import "./changeColorButton.scss";

const ChangeColorButton = ({ color, changeNameColor, setStateColor }) => {
  const selectColor = (color) => {
    changeNameColor(color);
    setStateColor(color);
  };

  return (
    <button
      onClick={() => selectColor(color)}
      className="color__button"
      style={{ backgroundColor: `${color}` }}
    />
  );
};

export default ChangeColorButton;
