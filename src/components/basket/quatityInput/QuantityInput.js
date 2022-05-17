import React, { useEffect, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import "./quantityInput.scss";

export const QuantityInput = ({ qtty, setQtty }) => {
  const increment = () => {
    setQtty((qtty) => qtty + 1);
  };

  const decrement = () => {
    if (qtty > 1) {
      setQtty((qtty) => qtty - 1);
    }
  };

  return (
    <div className="qtty">
      <FiMinus color="#E0BEA2" onClick={decrement} />
      <input
        className="qtty__input"
        type="number"
        value={qtty}
        onChange={setQtty}
      />
      <FiPlus color="#E0BEA2" width={24} height={24} onClick={increment} />
    </div>
  );
};
