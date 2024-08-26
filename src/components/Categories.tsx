import React, { FC } from 'react';

type CategoriesProps = {
  categories: number;
  setCategories: any;
};
export const Categories: FC<CategoriesProps> = ({ categories, setCategories }) => {
  const categotiesArr = ['Все', 'Шоссейные', 'Гревелы', 'МТБ', 'Городские', 'Двухподвесный'];

  return (
    <div className="categories">
      <ul>
        {categotiesArr.map((item, index) => {
          return (
            <li
              className={categories === index ? 'active' : ''}
              key={index}
              onClick={() => setCategories(index)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
