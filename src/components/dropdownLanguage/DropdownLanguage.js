import React, { useEffect, useState } from 'react';
import './dropdownLanguage.scss';
import { useTranslation } from 'react-i18next';

const DropdownLanguage = () => {
    const { t, i18n } = useTranslation();
    const [isActive, setIsActive] = useState(false);
    const [select, setSelect] = useState('RU')
    const option = ['ru', 'ua']

    const handleClick = (lang) => {
      i18n.changeLanguage(lang)
      setIsActive(!isActive)
      setSelect(lang)
    } 
    const getLocalStorage = () => {
      let currentLang = localStorage.getItem('i18nextLng');
      setSelect(currentLang)
    }

    useEffect(()=> {
        getLocalStorage()
    }, [])

  return (
    <div className="dropdown">
      <button className='dropdown-btn' onClick={()=> setIsActive(!isActive)}>{select}<div className={isActive ? 'dropdown-arrow active' : 'dropdown-arrow'}></div></button>
      <div className={isActive ? 'dropdown-content active' : 'dropdown-content'}>
      {
          option.map((item) => (
            <button 
            key={item}
            onClick={() => handleClick(item)}
            className='dropdown-item'>{item}</button>
          ))
      } 
      </div>

  </div>
  )
};

export default  DropdownLanguage;
