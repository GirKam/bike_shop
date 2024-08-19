import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { setCategories } from '../redux/slices/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

import { BicycleItem } from '../components/BicycleItem';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import Skeleton from '../components/Skeleton';

import '../scss/app.scss';
import { AppContext } from '../App';

export const Home = () => {
  const dispatch = useDispatch();
  const categoriesRedux = useSelector((state) => state.filter.category);
  const sort = useSelector((state) => state.filter.sort);

  const { searchValue } = useContext(AppContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderType, setOrderType] = useState('desc');

  const searchVal = searchValue ? `search=${searchValue}` : '';
  const category = categoriesRedux ? `category=${categoriesRedux}` : '';

  const setCategoriesId = (id) => {
    dispatch(setCategories(id));
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://66b753847f7b1c6d8f1b9072.mockapi.io/items?${category}${searchVal}&sortBy=${sort.sortProperty}&order=${orderType}`,
      )
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      });
  }, [category, sort, orderType, searchVal]);

  return (
    <div>
      <div className="content__top">
        <Categories categories={categoriesRedux} setCategories={setCategoriesId} />
        <Sort orderType={orderType} setOrderType={setOrderType} />
      </div>
      <h2 className="content__title">Все велосипеды</h2>
      <div className="content__items">
        {loading
          ? [...new Array(3)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => {
              return <BicycleItem key={item.id} {...item} />;
            })}
      </div>
    </div>
  );
};
