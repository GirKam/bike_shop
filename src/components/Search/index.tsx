import React, { FC, useCallback, useRef, useState } from 'react';
import styles from './Search.module.scss';
// import { useContext } from 'react';
// import { AppContext } from '../../App';
import debounce from 'lodash.debounce';
import { setSearchValue } from '../../redux/slices/filterSlice.ts';
import { useDispatch } from 'react-redux';

export const Search: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    dispatch(setSearchValue(''));
    setValue('');

    inputRef.current?.focus();
  };

  const debounceRef = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 500),
    [],
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
