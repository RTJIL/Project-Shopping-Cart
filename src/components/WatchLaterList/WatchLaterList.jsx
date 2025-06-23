import { useWatchLater } from '../WatchLaterContext/WatchLaterContext';
import styles from './WatchLaterList.module.css';

const WatchLaterList = () => {
  const { watchLaterList, removeFromWatchLater } = useWatchLater();

  if (watchLaterList.length === 0) return <p>No anime saved yet.</p>;

  return (
    <div className={styles.cardGrid}>
      {watchLaterList.map((anime) => (
        <div key={anime.mal_id} className={styles.card}>
          <img
            src={anime.images.jpg.image_url}
            alt={anime.title}
            className={styles.cardImg}
          />
          <div className={styles.cardContent}>
            <h3>{anime.title}</h3>
            <p>{anime.genres.map((g) => g.name).join(', ')}</p>
            <p>⭐ {anime.score ?? 'N/A'}</p>
            <button onClick={() => removeFromWatchLater(anime.mal_id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WatchLaterList;
