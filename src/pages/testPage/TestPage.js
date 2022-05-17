import React from 'react';
import { useTranslation } from 'react-i18next';
import DropdownLanguage from '../../components/dropdownLanguage/DropdownLanguage';
import DropdownWithBorder from '../../components/reusedComponent/dropdownWithBorder/DropdownWithBorder';
import ContentDropdown from '../../components/reusedComponent/contentDropDown/ContentDropdown';
import FilterSvg from '../../assets/svg/filterSvg';
import DropdownIntoDropdown from '../../components/reusedComponent/dropdownIntoDropdown/DropdownIntoDropdown';
import Accordion from '../../components/accordion/Accordion';
import ButtonMain from '../../components/reusedComponent/buttonMain/ButtonMain';
import ButtonOutline from '../../components/reusedComponent/buttonOutline/ButtonOutline';
import LikeSvg from '../../assets/svg/likeSvg';
import SearchInput from '../../components/searchInput/SearchInput';
import UserSvg from '../../assets/svg/userSvg';
import {Link } from 'react-router-dom'


const TestPage = () => {
    const { t, i18n } = useTranslation();

    const option = [
        {size: 'S'},
        {size: 'M'},
        {size: 'L'},
    ]
    const mas = ['gg', 'ff']
    const nam = [
      {
        name:'Размер',
        option: ['S', 'M', 'L']
      },
      {
        name:'Цвет',
        option: ['Белый', 'Черный', 'Синий']
      },
      {
        name:'Цена',
        option: ['до 1000', 'до 3000', 'до 5000']
      },
      {
        name:'Сортировать по',
        option: ['Цене', 'Рейтингу']
      }
    ]
    const data = [
      {
          title: 'Name',
          option: 'hhh' 
      },
      {
          title: 'Size',
          option: 'ggg'
      },
      {
        title: 'Order',
        option: 'Lorem'
      }
  ]
  const product = [
      {
          title: 'Кремовое пальто',
          price: 3150,
          color: [
              {
                name: '#fff',
                colorDeckr: ''
              },
              {
                name: '#6F83A4',
                colorDeckr: ''
              },
              {
                name: '#F1DDAA',
                colorDeckr: 'Кофе с молоком меланж'
              }, 
            ],
        size: [
            {s: 'S'},
            {m: 'M'},
            {l: 'L'}
        ],
        description: 'Lorem',
        compound: [
            {
                compound: '50% Шерсть, 50% Полиэстер',
                lining: '100% Полиэстер Утеплитель',
                insulation: '90% Пух, 10% Перо'
            }
        ],
        care: [
            {
                0: 'Не стирать',
                1: 'Гладить при температуре утюга до 110°C',
                2: 'Не отбеливать',
                3: 'Сухая чистка (химчистка)',
                4: 'Барабанная сушка запрещена'
            }
        ]

      }
  ]
  return (
      <div className='container'>
        <h1>{t('title')}</h1>
      <div>{t('description.part1')}</div>
      
      <Link  to='/'><UserSvg/></Link>
      <div style={{width: '300px'}}><Accordion data={data}/></div>
      <ButtonMain text={t('subscribe')}/>
      <ButtonOutline text={t('buttonLike')} img={<LikeSvg/>}/>
      <SearchInput text={t('searchPlaceholder')}/>
      < DropdownLanguage />
     
      <div style={{width: '300px'}}>
        <ContentDropdown option={option} initial={'Фильтр'} img={<FilterSvg/>}/></div>
        <div style={{width: '300px'}}>
        <ContentDropdown option={mas} initial={'size'} /></div>
        <div style={{width: '300px'}}><DropdownIntoDropdown option={nam} initial={'Фильтр'} img={<FilterSvg/>}/></div>
      </div>
  )
};

export default TestPage;
