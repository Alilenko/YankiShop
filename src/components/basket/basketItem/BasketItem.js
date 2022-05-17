import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteFromCart,
  changeSizeInCart,
  changeQttyInCart,
} from "../../../app/CatalogSlice";
import ChangeColorButton from "../../reusedComponent/changeColorButton/ChangeColorButton";
import ContentDropdown from "../../reusedComponent/contentDropDown/ContentDropdown";
import { QuantityInput } from "../quatityInput/QuantityInput";
import { FiTrash2 } from "react-icons/fi";

import "./basketItem.scss";

export const BasketItem = ({ item }) => {
  const [size, setSize] = useState(item.size);
  const [qtty, setQtty] = useState(item.qtty);
  const dispatch = useDispatch();

  useEffect(() => {
    changeSize();
  }, [size]);

  useEffect(() => {
    changeQtty();
  }, [qtty]);

  const changeSize = () => {
    dispatch(changeSizeInCart({ id: item.cartId, size }));
  };

  const changeQtty = () => {
    dispatch(changeQttyInCart({ id: item.cartId, qtty }));
  };

  const deleteItem = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <div className="basket__item">
      <img className="basket__img" src={item.img} />
      <div>{item.title}</div>
      <ChangeColorButton color={item.color} />
      <div className="basket__size">
        <ContentDropdown
          onChange={setSize}
          option={item.availableSize}
          initial={item.size}
        />
      </div>
      <QuantityInput qtty={qtty} setQtty={setQtty} />
      <div className="basket__right">
        <div>{item.sum} грн</div>
        <button className="basket__delete" aria-label="basket">
          <FiTrash2 color="#E0BEA2" onClick={() => deleteItem(item.cartId)} />
        </button>
      </div>
    </div>
  );
};
