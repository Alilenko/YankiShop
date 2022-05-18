import React, { useState } from "react";
import "./productImage.scss";

const ProductImage = ({ img }) => {
  const [activeImg, setActiveImg] = useState(img[0].img);

  const changeActiveImage = (el) => {
    const one = img.filter((it) => it.img === el);
    setActiveImg(one[0].imgBig);
  };
  return (
    <div className="product__img">
      <div className="product__image_mini">
        {img.map((item, i) => (
          <img
            key={i}
            onClick={() => changeActiveImage(item.img)}
            className="product__image_item"
            src={item.img}
            alt="product photo"
          />
        ))}
      </div>
      <div className="product__image__big">
        <img src={activeImg} alt="product photo" />
      </div>
    </div>
  );
};

export default ProductImage;
