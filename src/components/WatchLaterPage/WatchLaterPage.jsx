import WatchLaterList from '../WatchLaterList/WatchLaterList';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const WatchLaterPage = () => {
  return (
    <motion.div
      style={{ padding: '20px' }}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <h2 style={{ marginBottom: '20px' }}>Watch Later</h2>
      <WatchLaterList />
    </motion.div>
  );
};

export default WatchLaterPage;
