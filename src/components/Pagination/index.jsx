import React, { useState } from 'react';
import './Pagination.module.scss';

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
};
