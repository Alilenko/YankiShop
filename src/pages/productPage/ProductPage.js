
import React, { useEffect } from 'react';
import rect1 from '../../assets/image/one.jpg'
import rect2 from '../../assets/image/Rectangle 21.jpg';
import rect3 from '../../assets/image/Rectangle 22.jpg';
import rect4 from '../../assets/image/Rectangle 23.jpg';
import rect5 from '../../assets/image/Rectangle 24.jpg';
import rect6 from '../../assets/image/Rectangle 25.jpg'
import ProductContent from '../../components/productContent/ProductContent';
import ProductImage from '../../components/productImage/ProductImage';
import ProductList from '../../components/productList/ProductList';
import {useDispatch, useSelector} from 'react-redux'
import {useLocation, useParams} from 'react-router-dom'
import {setCurrentGoods} from '../../app/CatalogSlice'

import './productPage.scss'

const ProductPage = () => {
    const {goods, currentGoods} = useSelector(state => state.catalog);

    const product = [
        {
            title: 'Кремовое пальто',
            img: [
                {
                    img: rect1,
                    imgBig: rect1
                },
                {
                    img: rect2,
                    imgBig: rect2
                },
                {
                    img: rect3,
                    imgBig: rect3
                },
                {
                    img: rect4,
                    imgBig: rect4
                },
                {
                    img: rect5,
                    imgBig: rect5
                },
                {
                    img: rect6,
                    imgBig: rect6
                },
            ],
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
              {size: 'S'},
              {size: 'M'},
              {size: 'L'}
          ],
          description: 'Lorem',
          compound: [
            {p: 'Состав: 50% Шерсть, 50% Полиэстер'},
            {p: 'Подкладка: 100% Полиэстер Утеплитель'},
            {p: 'Утеплитель: 90% Пух, 10% Перо'}
          ],
          care: [
                {p: 'Не стирать'},
                {p: 'Гладить при температуре утюга до 110°C'},
                {p: 'Не отбеливать'},
                {p: 'Сухая чистка (химчистка)'},
                {p: 'Барабанная сушка запрещена'}
          ]
  
        }
    ]
    const path = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setCurrentGoods(path.id))
    },[path])

    console.log(path);
  return (
      <div className='container'>
    <div className='product '>
        <div className='product__left'>
        {
            currentGoods.map(item => (
                <ProductImage key={item.title} img={item.img}/>
            ))
        }
        </div>
        <div className='product__right'>
            <ProductContent key={currentGoods[0].id} item={currentGoods[0]}/>
        </div>
    </div>
    <ProductList/>
    </div>
  )
};

export default ProductPage;
