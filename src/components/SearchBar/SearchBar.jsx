import styles from './SearchBar.module.css';
import { MdSearch } from 'react-icons/md';
import clsx from 'clsx';
import { useState } from 'react';

const SearchBar = () => {
  const [animationState, setAnimationState] = useState('');
  const [value, setValue] = useState('');

  const handleFocus = () => {
    setAnimationState(styles.expand);
  };

  const handleBlur = () => {
    setAnimationState(styles.shrink);
  };

  const handleType = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <div className={clsx(styles.container, animationState)}>
        <MdSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search anime..."
          className={styles.searchBar}
          value={value}
          onChange={handleType}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </>
  );
};

export default SearchBar;
