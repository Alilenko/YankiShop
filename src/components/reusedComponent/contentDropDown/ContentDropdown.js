import React, { useState } from "react";
import MainDropdown from "../mainDropdown/MainDropdown";
import "./contentDropdown.scss";

const ContentDropdown = ({ initial, option, img, value, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const [select, setSelect] = useState(initial);

  const handleClick = (value) => {
    setIsActive(!isActive);
    setSelect(value);
    onChange(value);
  };

  return (
    <MainDropdown
      name={initial}
      img={img}
      setIsActive={setIsActive}
      isActive={isActive}
      select={select}
      initial={initial}
    >
      {option.map((item) => (
        <div
          key={item.size}
          onClick={() => handleClick(item.size)}
          className="dropdown-item"
        >
          {item.size}
        </div>
      ))}
    </MainDropdown>
  );
};

export default ContentDropdown;
