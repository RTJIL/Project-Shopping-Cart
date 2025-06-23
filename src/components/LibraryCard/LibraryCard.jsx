import styles from './LibraryCard.module.css';
import { useWatchLater } from '../WatchLaterContext/WatchLaterContext';

const LibraryCard = ({ img, title, genre, score, mal_id, animeData }) => {
  const { watchLaterList, addToWatchLater, removeFromWatchLater } = useWatchLater();

  const isInWatchLater = watchLaterList.some(anime => anime.mal_id === mal_id);

  const handleToggle = () => {
    isInWatchLater
      ? removeFromWatchLater(mal_id)
      : addToWatchLater(animeData);
  };

  return (
    <div className={styles.libraryCardContainer}>
      <img src={img} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardGenre}>{genre}</p>
        <p className={styles.cardScore}>⭐ {score}</p>

        <button
          onClick={handleToggle}
          className={isInWatchLater ? styles.remove : styles.add}
        >
          {isInWatchLater ? 'Remove from Watch Later' : 'Add to Watch Later'}
        </button>
      </div>
    </div>
  );
};

export default LibraryCard;
