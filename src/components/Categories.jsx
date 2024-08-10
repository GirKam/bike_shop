import React, { useState } from 'react';

export const Categories = () => {
  const [categories, setCategories] = useState(0);
  const categotiesArr = ['Все', 'Шоссейные', 'Гревелы', 'МТБ', 'Городские', 'Двухподвесный'];

  const onClickCategory = (id) => {
    setCategories(id);
  };

  return (
    <div className="categories">
      <ul>
        {categotiesArr.map((item, index) => {
          return (
            <li
              className={categories === index ? 'active' : ''}
              key={index}
              onClick={() => onClickCategory(index)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
