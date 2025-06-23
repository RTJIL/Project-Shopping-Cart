import styles from './HomeContent.module.css';
import HomeInfo from '../HomeInfo/HomeInfo';
import HomeNav from '../HomeNav/HomeNav';

const HomeContent = () => {
  return (
    <div className={styles.homeContentContainer}>
      <HomeInfo />
      <HomeNav />
    </div>
  );
};

export default HomeContent;
