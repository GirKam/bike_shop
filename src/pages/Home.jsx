import React, { useEffect, useState } from 'react';

import { BicycleItem } from '../components/BicycleItem';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import Skeleton from '../components/Skeleton';

import '../scss/app.scss';

export const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://66b753847f7b1c6d8f1b9072.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="content__top">
        <Categories />
        <Sort />
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
