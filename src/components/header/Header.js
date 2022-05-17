import React, { useState } from "react";
import { useSelector } from "react-redux";
import Burger from "../burger/Burger";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import LogoSvg from "../../assets/svg/LogoSvg";
import DropdownLanguage from "../dropdownLanguage/DropdownLanguage";
import SearchInput from "../searchInput/SearchInput";
import { useTranslation } from "react-i18next";
import UserSvg from "../../assets/svg/userSvg";
import LikeSvg from "../../assets/svg/likeSvg";
import BasketSvg from "../../assets/svg/BasketSvg";
import HeaderNavActive from "../headerNavActive/HeaderNavActive";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isActive, setisActive] = useState(false);
  const { cart } = useSelector((state) => state.catalog);

  return (
    <header className="header container">
      <HeaderNavActive isActive={isActive} />
      <div className="header__left">
        <Burger isActive={isActive} setIsActive={setisActive} />
        <NavLink
          className={({ isActive }) =>
            isActive ? "header__navlink_active" : "mobile_hide"
          }
          to="/product"
        >
          {t("nav.new")}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "header__navlink_active" : "mobile_hide"
          }
          to="/catalog"
        >
          {t("nav.catalog")}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "header__navlink_active" : "mobile_hide"
          }
          to="/test"
        >
          {t("nav.about")}
        </NavLink>
      </div>
      <div className="header__top ">
        <LogoSvg />
      </div>
      <div className="header__right">
        <div className="mob400">
          <DropdownLanguage />
        </div>
        <div className="header__link">
          <SearchInput text={t("searchPlaceholder")} />
          <Link className="mobile_hide" to="/">
            <UserSvg />
          </Link>
          <Link className="mob400" to="/favorite">
            <LikeSvg />
          </Link>

          <Link to="/cart" className="header__cart-row">
            {cart.length ? (
              <div className="header__card">{cart.length}</div>
            ) : null}
            <BasketSvg />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
