import React, {useEffect} from 'react';
import CategoryList from '../../components/categoryList/CategoryList';
import ProductList from '../../components/productList/ProductList';
import './catalogPage.scss'
import { useHttp } from '../../hooks/useHttp';
import {useDispatch, useSelector} from 'react-redux';
import {goodsFetched, goodsError} from '../../app/CatalogSlice'

const CatalogPage = () => {
    const {request} = useHttp();
    const {goods} = useSelector(state => state.catalog);
    
    const dispatch = useDispatch();
    
    useEffect(() => {  
       /* request("http://localhost:5000/product")
        .then(data => dispatch(goodsFetched(data)))
        .catch(dispatch(goodsError))*/
    }, [])

  return (
      <div className='container'>
          <div className='catalog'>
          <CategoryList/>
          <div className='catalog__list'>
            <ProductList/>
            </div>
          </div>
      </div>
  )
};

export default CatalogPage;
