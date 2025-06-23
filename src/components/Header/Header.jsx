//Header.jsx

import styles from './Header.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../Logo/Logo';
import WatchLater from '../WatchLater/WatchLater';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <SearchBar />
      <WatchLater />
    </div>
  );
};

export default Header;
