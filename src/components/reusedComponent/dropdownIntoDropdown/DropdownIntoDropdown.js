import React, {useState} from 'react';
import ContentDropdown from '../contentDropDown/ContentDropdown';
import MainDropdown from '../mainDropdown/MainDropdown';
import './dropdownIntoDropdown.scss'

const DropdownIntoDropdown = ({initial, option, img}) => {
  const [isActive, setIsActive] = useState(false);
  const [select, setSelect] = useState(initial)

  const handleClick = (lang) => {
    setIsActive(!isActive)
    setSelect(lang)
  } 

  return (
    <MainDropdown name={initial} img={img} setIsActive={setIsActive} isActive={isActive} select={select} initial={initial}>
          {
              option.map((item) => (
                <div key={item.name}>
                  <ContentDropdown option={item.option} initial={item.name} />
                </div>
              ))
          }
    </MainDropdown>
  )
};

export default DropdownIntoDropdown;
