//LibraryContent.jsx

import styles from './LibraryContent.module.css';
import LibraryNavBar from '../LibraryNavBar/LibraryNavBar';
import LibraryCollection from '../LibraryCollection/LibraryCollection';

const LibraryContent = () => {
  return (
    <div className={styles.libraryContentContainer}>
      <LibraryNavBar />
      <LibraryCollection />
    </div>
  );
};

export default LibraryContent;
