import React, { useEffect, useState } from 'react';
import { BicycleItem } from './components/BicycleItem';
import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { Sort } from './components/Sort';
import './scss/app.scss';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://66b753847f7b1c6d8f1b9072.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все велосипеды</h2>
          <div className="content__items">
            {items.map((item) => {
              return (
                <BicycleItem
                  key={item.id}
                  // key={index}
                  // title={item.title}
                  // price={item.price}
                  // imageUrl={item.imageUrl}
                  // sizes={item.sizes}
                  // types={item.types}
                  {...item}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
