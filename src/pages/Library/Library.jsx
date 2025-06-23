//Library.jsx

import styles from './Library.module.css';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import LibraryContent from '../../components/LibraryContent/LibraryContent';

const variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

const Library = () => {
  return (
    <motion.div
      className={styles.libraryContainer}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      onAnimationStart={() => (document.body.style.overflow = 'hidden')}
      onAnimationComplete={() => (document.body.style.overflow = '')}
    >
      <LibraryContent />
    </motion.div>
  );
};

export default Library;
