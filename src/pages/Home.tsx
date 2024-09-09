import React, { FC, useEffect } from 'react';

import { setCategories, selectFilter } from '../redux/slices/filterSlice.ts';
import { useSelector } from 'react-redux';
import { fetchBikes, selectBike } from '../redux/slices/bikeSlice.ts';
import { BicycleItem } from '../components/BicycleItem.tsx';
import { Categories } from '../components/Categories.tsx';
import { Sort } from '../components/Sort.tsx';
import Skeleton from '../components/Skeleton';

import '../scss/app.scss';
import { useAppDispatch } from '../redux/store.ts';

export const Home: FC = () => {
  const dispatch = useAppDispatch();

  const { orderType, categories, searchValue, sort } = useSelector(selectFilter);
  const { status, items } = useSelector(selectBike);

  const searchVal = searchValue ? `search=${searchValue}` : '';
  const category = categories ? `category=${categories}` : '';

  const setCategoriesId = (id: number) => {
    dispatch(setCategories(id));
  };

  const fetchBike = async () => {
    dispatch(
      fetchBikes({
        category,
        searchVal,
        sort: String(sort),
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
        <Sort />
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
