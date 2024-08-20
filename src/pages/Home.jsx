import React, { useEffect, useContext } from 'react';

import { setCategories } from '../redux/slices/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBikes } from '../redux/slices/bikeSlice';

import { BicycleItem } from '../components/BicycleItem';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import Skeleton from '../components/Skeleton';

import '../scss/app.scss';
import { AppContext } from '../App';
import { setOrderType } from '../redux/slices/filterSlice';

export const Home = () => {
  const dispatch = useDispatch();
  const categoriesRedux = useSelector((state) => state.filter.category);
  const sort = useSelector((state) => state.filter.sort);
  const orderType = useSelector((state) => state.filter.orderType);
  const items = useSelector((state) => state.bike.items);
  const status = useSelector((state) => state.bike.status);

  const { searchValue } = useContext(AppContext);

  const searchVal = searchValue ? `search=${searchValue}` : '';
  const category = categoriesRedux ? `category=${categoriesRedux}` : '';

  const setCategoriesId = (id) => {
    dispatch(setCategories(id));
  };
  const setOrder = (id) => {
    dispatch(setOrderType(id));
  };

  const fetchBike = async () => {
    dispatch(
      fetchBikes({
        category,
        searchVal,
        sort,
        orderType,
      }),
    );
  };

  useEffect(() => {
    fetchBike();
  }, [category, sort, orderType, searchVal]);

  return (
    <div>
      <div className="content__top">
        <Categories categories={categoriesRedux} setCategories={setCategoriesId} />
        <Sort orderType={orderType} setOrderType={setOrder} />
      </div>
      <h2 className="content__title">Все велосипеды</h2>

      {status === 'error' ? (
        <h1>Вернитесь позже, идет техническая работа</h1>
      ) : (
        <div className="content__items">
          {status === 'loading'
            ? [...new Array(3)].map((_, index) => <Skeleton key={index} />)
            : items.map((item) => {
                return <BicycleItem key={item.id} {...item} />;
              })}
        </div>
      )}
    </div>
  );
};
