import React, { useState } from 'react';
import './dropdownWithBorder.scss';


const DropdownWithBorder = ({option}) => {

    const [isActive, setIsActive] = useState(false);
    const [select, setSelect] = useState('Размер')
    //const option = ['S', 'M']

    const handleClick = (lang) => {
      setIsActive(!isActive)
      setSelect(lang)
    } 
    
  return (
    <div className="dropdown-withborder">
      <div className={isActive ? 'dropdown-btn active' : 'dropdown-btn'} onClick={()=> setIsActive(!isActive)}>{select}<div className={isActive ? 'dropdown-arrow active' : 'dropdown-arrow'}></div></div>
      <div className={isActive ? 'dropdown-content active' : 'dropdown-content'}>
      {
          option.map((item) => (
            <div 
            key={item.size}
            onClick={() => handleClick(item.size)}
            className='dropdown-item'>{item.size}</div>
          ))
      } 
      </div>
  </div>

  )
};

export default  DropdownWithBorder;
