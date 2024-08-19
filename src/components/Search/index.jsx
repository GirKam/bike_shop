import React, { useCallback, useRef, useState } from 'react';
import styles from './Search.module.scss';
import { useContext } from 'react';
import { AppContext } from '../../App';
import debounce from 'lodash.debounce';

export const Search = () => {
  const [value, setValue] = useState('');
  const { setSearchValue } = useContext(AppContext);
  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const debounceRef = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    [],
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    debounceRef(e.target.value);
  };

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        className={styles.input}
        value={value}
        onChange={(e) => onChangeInput(e)}
        placeholder="Поиск..."
      />
      {value && (
        <button className={styles.btn} onClick={handleClear}>
          X
        </button>
      )}
    </div>
  );
};
