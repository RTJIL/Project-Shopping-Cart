//Home.jsx

//styles
import styles from './Home.module.css';

//components
import Background from '../../components/HomeBackground/Background';
import HomeContent from '../../components/HomeContent/HomeContent';

//extra features
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  return (
    <motion.div
      className={styles.homeContainer}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <Background />
      <HomeContent />
    </motion.div>
  );
};

export default Home;
