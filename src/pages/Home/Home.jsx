//Home.jsx

//styles
import styles from './Home.module.css';

//components
import Header from '../../components/Header/Header';
import Background from '../../components/HomeBackground/Background';
import HomeContent from '../../components/HomeContent/HomeContent';

//extra features
import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 },
};

const Home = () => {
  return (
    <motion.div className={styles.homeContainer} variants={variants} initial='initial' animate='animate' exit='exit'>
      <Background />
      <Header />
      <HomeContent />
    </motion.div>
  );
};

export default Home;
