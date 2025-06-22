//Home.jsx

//styles
import styles from './Home.module.css';

//components
import Header from '../../components/Header/Header';
import Background from '../../components/HomeBackground/Background';
import HomeContent from '../../components/HomeContent/HomeContent';

const Home = () => {
  return (
    <div className={styles.container}>
      <Background />
      <Header />
      <HomeContent />
    </div>
  );
};

export default Home;
