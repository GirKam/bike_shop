import React, { useState } from 'react';
import style from './Pagination.module.scss';

export const Pagination = ({ totalItems }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  let itemsPerPage = 4;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setItems(totalItems.slice(startIndex, endIndex));
  };

  const pageCount = Math.ceil(totalItems.length / itemsPerPage);

  return (
    <div>
      <ul className={style.item}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <span>
        <ul className={style.page}>
          {Array(pageCount)
            .fill(0)
            .map((_, index) => (
              <li key={index}>
                <button
                  // href="#"
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? style.active : ''}
                >
                  {index + 1}
                </button>
              </li>
            ))}
        </ul>
      </span>
    </div>
  );
};
