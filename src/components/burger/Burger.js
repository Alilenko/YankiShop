import React, {useState} from 'react';
import './burger.scss'

const Burger = ({whiteColor, isActive, setIsActive}) => {
   // const [isActive, setIsActive] = useState(false)


  return (
    <div  onClick={()=> setIsActive(!isActive)} className={isActive ? "menu-btn active" : "menu-btn"} >
      <span className={whiteColor ? 'white' : null}></span>
    </div>
  )
};

export default Burger;
