import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./headerNavActive.scss";

const HeaderNavActive = ({ isActive, setIsActive }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={isActive ? "nav__active show" : "nav__active"}>
      <Link
        onClick={() => setIsActive(false)}
        className="mobile_show"
        to="/home"
      >
        {t("nav.new")}
      </Link>
      <Link onClick={() => setIsActive(false)} className="mobile_show" to="/">
        {t("nav.catalog")}
      </Link>
      <Link
        onClick={() => setIsActive(false)}
        className="mobile_show"
        to="/about"
      >
        {t("nav.about")}
      </Link>
      <Link onClick={() => setIsActive(false)} to="/">
        {t("nav.pay")}
      </Link>
      <Link onClick={() => setIsActive(false)} to="/">
        {t("nav.return")}
      </Link>
      <Link onClick={() => setIsActive(false)} to="/">
        {t("nav.contact")}
      </Link>
    </div>
  );
};

export default HeaderNavActive;
