//LibraryCard.jsx

import styles from './LibraryCard.module.css';

import { useWatchLater } from '../WatchLaterContext/WatchLaterContext';

const LibraryCard = ({ img, title, genre, score, mal_id, animeData }) => {
  const { watchLaterList, addToWatchLater } = useWatchLater();

  const isInWatchLater = watchLaterList.some((item) => item.mal_id === mal_id);

  return (
    <div className={styles.libraryCardContainer}>
      <img src={img} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{genre}</p>
        <p>⭐ {score}</p>
        <button
          onClick={() => addToWatchLater(animeData)}
          disabled={isInWatchLater}
          className={isInWatchLater ? styles.disabledButton : ''}
        >
          {isInWatchLater ? 'Added' : '+ Watch Later'}
        </button>
      </div>
    </div>
  );
};

export default LibraryCard;
