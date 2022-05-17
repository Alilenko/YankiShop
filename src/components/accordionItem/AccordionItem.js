import React, {Children, useState} from 'react';
import './accordionItem.scss'

const AccordionItem = ({title, open, children}) => {
    //const {title, option} = item;
    const [isOpen, setIsOpen] = useState(open || false)


  return (
      <div className='accordion-item'>
          <button className='title' onClick={() => setIsOpen(!isOpen)}>
            <div className='text'>{title}</div>
            <div className={ isOpen ? 'arrow active' : 'arrow'}></div>
          </button>
          <div className={isOpen ? 'content show' : 'content'}>
              <div></div>
            {children}
          </div>
      </div>
  )
};

export default AccordionItem;
