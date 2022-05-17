import React from 'react';
import './buttonOutline.scss';

const ButtonOutline = ({text, img}) => {
  return (
      <button className='button-outline'>
        {img ? <div className='button-img'>{img}</div> : null}
        {text}</button>
  )
};

export default ButtonOutline;
