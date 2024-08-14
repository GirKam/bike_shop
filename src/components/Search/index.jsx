import React from 'react';
import styles from './Search.module.scss';

export const Search = ({ setSearch, search }) => {
  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск..."
      />
      {search && (
        <button className={styles.btn} onClick={() => setSearch('')}>
          X
        </button>
      )}
    </div>
  );
};
