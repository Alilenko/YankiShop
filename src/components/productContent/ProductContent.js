import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, changeQttyInCart } from "../../app/CatalogSlice";
import { useTranslation } from "react-i18next";
import { db, colRef } from "../../firebase";
import { addDoc } from "firebase/firestore";

import ChangeColorButton from "../reusedComponent/changeColorButton/ChangeColorButton";
import ContentDropdown from "../reusedComponent/contentDropDown/ContentDropdown";
import DropdownWithBorder from "../reusedComponent/dropdownWithBorder/DropdownWithBorder";
import ButtonMain from "../reusedComponent/buttonMain/ButtonMain";
import ButtonOutline from "../reusedComponent/buttonOutline/ButtonOutline";
import LikeSvg from "../../assets/svg/likeSvg";
import AccordionItem from "../accordionItem/AccordionItem";

import "./productContent.scss";

const ProductContent = ({ item }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.catalog);
  const [colorActive, setColorActive] = useState("");
  const [colorNameActive, setColorNameActive] = useState("");
  const [stateSize, setStateSize] = useState("");
  const [stateColor, setStateColor] = useState("");
  const [notEnoughData, setNotEnoughData] = useState("");
  //const { title, price, color, size, compound, care } = item;

  useEffect(() => {}, [item]);
  const changeNameColor = (colorItem) => {
    const c = item.color.filter((item) => item.name === colorItem);
    setColorActive(colorItem);
    setColorNameActive(c[0].colorDeckr);
  };

  const addToBasket = (item) => {
    if (stateSize === "") {
      setNotEnoughData(t("errorSize"));
    } else if (stateColor === "") {
      setNotEnoughData(t("errorColor"));
    } else {
      const newProduct = {
        id: item.id,
        cartId: item.id + stateSize + stateColor,
        title: item.title,
        img: item.img[0].img,
        price: item.price,
        color: stateColor,
        size: stateSize,
        availableSize: item.size,
        qtty: 1,
        sum: item.price,
      };
      setNotEnoughData("");
      if (cart.find((el) => el.cartId === newProduct.cartId)) {
        dispatch(
          changeQttyInCart({
            id: newProduct.cartId,
            qtty: cart.find((e) => e.cartId === newProduct.cartId).qtty + 1,
          })
        );
      } else {
        dispatch(addToCart(newProduct));
      }
    }
  };

  return (
    <div className="product__content">
      <div className="product__title">{item.title}</div>
      <div className="product__price">{item.price} грн</div>
      <div className="product__color">
        {item.color.map((el) => (
          <ChangeColorButton
            key={el.name}
            color={el.name}
            changeNameColor={changeNameColor}
            stateColor={stateColor}
            setStateColor={setStateColor}
          />
        ))}
      </div>
      <div className="product__color-name">{colorNameActive}</div>
      <div className="product__size">
        <ContentDropdown
          value={stateSize}
          onChange={setStateSize}
          option={item.size}
          initial={t("select-size")}
        />
      </div>
      {notEnoughData && <div className="error__data">{notEnoughData}</div>}
      <div className="product__button">
        <ButtonMain text={t("add-basket")} onClick={() => addToBasket(item)} />
        <ButtonOutline text={t("buttonLike")} img={<LikeSvg />} />
      </div>
      <div className="product__details">{t("details")}</div>
      <div className="product__accordeon">
        <AccordionItem title={t("descr")}>
          <Care compound={item.compound} care={item.care} />
        </AccordionItem>
        <AccordionItem open={true} title={t("care")}>
          <Care compound={item.compound} care={item.care} />
        </AccordionItem>
      </div>
    </div>
  );
};

const Care = ({ compound, care }) => {
  return (
    <div className="care">
      {compound.map((it) => (
        <p key={it.p}>- {it.p}</p>
      ))}
      <br />
      {care.map((el) => (
        <p key={el.p}>- {el.p}</p>
      ))}
    </div>
  );
};

export default ProductContent;
