import React from 'react';

import './mainDropdown.scss';


const MainDropdown = ({img, children, setIsActive, isActive, select, initial}) => {
    
  return (
    <div className="dropdown-main">
      <div 
      className={isActive ? 'dropdown-btn active' : 'dropdown-btn'} 
      onClick={()=> setIsActive(!isActive)}>
        <div>{select ? select : initial}
        {img ? img : null}</div>
        <div className={isActive ? 'dropdown-arrow active' : 'dropdown-arrow'}></div>
          </div>
      <div className={isActive ? 'dropdown-content active' : 'dropdown-content'}>
        {children}
      </div>
  </div>

  )
};

export default  MainDropdown;
