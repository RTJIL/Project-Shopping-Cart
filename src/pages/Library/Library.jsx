import styles from './Library.module.css';
import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 30 },
  exit: { opacity: 0, y: 0 },
};

const Library = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <h1>Library Page</h1>
    </motion.div>
  );
};

export default Library;
