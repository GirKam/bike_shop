import React, { FC, useEffect } from 'react';

import { setCategories } from '../redux/slices/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBikes } from '../redux/slices/bikeSlice';
import { BicycleItem } from '../components/BicycleItem.tsx';
import { Categories } from '../components/Categories.tsx';
import { Sort } from '../components/Sort.tsx';
import Skeleton from '../components/Skeleton';
import { selectFilter } from '../redux/slices/filterSlice';
import { selectBike } from '../redux/slices/bikeSlice';

import '../scss/app.scss';
import { setOrderType } from '../redux/slices/filterSlice';

export const Home: FC = () => {
  const dispatch = useDispatch();

  const { orderType, categories, sort, searchValue } = useSelector(selectFilter);
  const { status, items } = useSelector(selectBike);

  const searchVal = searchValue ? `search=${searchValue}` : '';
  const category = categories ? `category=${categories}` : '';

  const setCategoriesId = (id: number) => {
    dispatch(setCategories(id));
  };
  const setOrder = (id: string) => {
    dispatch(setOrderType(id));
  };

  const fetchBike = async () => {
    dispatch(
      //@ts-ignore
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
        <Categories categories={categories} setCategories={setCategoriesId} />
        <Sort setOrderType={setOrder} />
      </div>
      <h2 className="content__title">Все велосипеды</h2>

      {status === 'error' ? (
        <h1>Вернитесь позже, идет техническая работа</h1>
      ) : (
        <div className="content__items">
          {status === 'loading'
            ? [...new Array(3)].map((_, index) => <Skeleton key={index} />)
            : items.map((item: any) => {
                return <BicycleItem key={item.id} {...item} />;
              })}
        </div>
      )}
    </div>
  );
};
