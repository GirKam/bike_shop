import React, { useState } from 'react';
import './Pagination.module.scss';

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);

  return <h1>Pagination</h1>;
};
