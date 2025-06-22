//Home.jsx

//styles
import styles from './Home.module.css';

//components
import Header from '../../components/Header/Header';
import Background from '../../components/Background/Background';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Background />
    </div>
  );
};

export default Home;
