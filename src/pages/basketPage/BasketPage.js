import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../app/CatalogSlice";
import { colRef } from "../../firebase";
import { getDocs, addDoc, onSnapshot } from "firebase/firestore";
import { BasketItem } from "../../components/basket/basketItem/BasketItem";

import "./BasketPage.scss";
import ButtonMain from "../../components/reusedComponent/buttonMain/ButtonMain";
import ModalToOrder from "../../components/basket/modalToOrder/ModalToOrder";

export const BasketPage = () => {
  const { cart } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [sum, setSum] = useState(0);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    totalSum();
  }, [cart]);

  const totalSum = () => {
    let total = cart.reduce((acc, current) => acc + current.sum, 0);
    setSum(total);
  };
  let order = [];
  onSnapshot(colRef, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      order.push({
        ...doc._document.data.value.mapValue.fields,
        id: doc.id,
      });
    });
  });

  return (
    <div className="container">
      {cart.map((item) => (
        <BasketItem key={item.cartId} item={item} />
      ))}
      {sum > 0 ? (
        <div>
          <div className="sum">
            {t("total sum")}
            <span>{sum}</span> грн
          </div>
          <div className="basket__button">
            <ButtonMain text={t("to order")} onClick={() => setOpen(!isOpen)} />
          </div>
        </div>
      ) : null}
      <ModalToOrder isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};
