import React from 'react';
import styles from './Search.module.scss';
import { useContext } from 'react';
import { AppContext } from '../../App';

export const Search = () => {
  const { searchValue, setSearchValue } = useContext(AppContext);

  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Поиск..."
      />
      {searchValue && (
        <button className={styles.btn} onClick={() => setSearchValue('')}>
          X
        </button>
      )}
    </div>
  );
};
