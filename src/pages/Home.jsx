import React, { useEffect, useState, useContext } from 'react';

import { BicycleItem } from '../components/BicycleItem';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import Skeleton from '../components/Skeleton';

import '../scss/app.scss';
import { AppContext } from '../App';

export const Home = () => {
  const { searchValue } = useContext(AppContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderType, setOrderType] = useState('desc');

  const [categories, setCategories] = useState(0);
  const [sort, setSort] = useState({ name: 'популярности', sortProperty: 'rating' });
  const searchVal = searchValue ? `search=${searchValue}` : '';
  const category = categories ? `category=${categories}` : '';

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://66b753847f7b1c6d8f1b9072.mockapi.io/items?${category}${searchVal}&sortBy=${sort.sortProperty}&order=${orderType}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setLoading(false);
      });
  }, [category, sort, orderType, searchVal]);

  return (
    <div>
      <div className="content__top">
        <Categories categories={categories} setCategories={setCategories} />
        <Sort orderType={orderType} setOrderType={setOrderType} sort={sort} setSort={setSort} />
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
