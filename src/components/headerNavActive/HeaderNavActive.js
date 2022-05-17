import React from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './headerNavActive.scss'

const HeaderNavActive = ({isActive}) => {
    const { t, i18n } = useTranslation();

  return (
      <div className={isActive ? 'nav__active show' : 'nav__active'}>
          <Link className='mobile_show' to='/'>{t('nav.new')}</Link>
          <Link className='mobile_show' to='/'>{t('nav.catalog')}</Link>
          <Link className='mobile_show' to='/'>{t('nav.about')}</Link>
          <Link to='/'>{t('nav.pay')}</Link>
          <Link to='/'>{t('nav.return')}</Link>
          <Link to='/'>{t('nav.contact')}</Link>
      </div>
  )
};

export default HeaderNavActive;
