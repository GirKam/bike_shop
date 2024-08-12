import React from 'react';

export const Categories = ({ categories, setCategories }) => {
  // const [categories, setCategories] = useState(0);
  const categotiesArr = ['Все', 'Шоссейные', 'Гревелы', 'МТБ', 'Городские', 'Двухподвесный'];

  // const onClickCategory = (id) => {
  //   setCategories(id);
  // };

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
