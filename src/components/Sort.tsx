import React, { FC, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort, selectSort, setOrderType, Sorted } from '../redux/slices/filterSlice.ts';

export const Sort: FC = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  // type SortItem = {
  //   name: string;
  //   sortProperty: string;
  // };
  const setOrder = (id: string) => {
    dispatch(setOrderType(id));
  };
  const sorted: Sorted[] = [
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'цене', sortProperty: 'price' },
    { name: 'алфавит', sortProperty: 'title' },
  ];
  const [visible, setVisible] = useState(false);
  const sortRef = useRef(null);

  const sortActive = (obj: Sorted) => {
    dispatch(setSort(obj));
    setVisible(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', { once: true }, (e: MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setVisible(false);
      }
    });
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <button onClick={() => setOrder('asc')}> ↑ </button>
        <button onClick={() => setOrder('desc')}> ↓ </button>
        <div onClick={() => setVisible(true)}>
          <b>Сортировка по:</b>
          <span>{sort.name}</span>
        </div>
      </div>
      {visible && (
        <div className="sort__popup">
          <ul>
            {sorted.map((obj, index) => {
              return (
                <li
                  className={sort.sortProperty === obj.sortProperty ? 'active' : ''}
                  key={index}
                  onClick={() => sortActive(obj)}
                >
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
