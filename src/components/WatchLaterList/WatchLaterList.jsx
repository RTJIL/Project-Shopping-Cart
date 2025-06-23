import { useWatchLater } from "../WatchLaterContext/WatchLaterContext";

const WatchLaterList = () => {
  const { watchLaterList, removeFromWatchLater } = useWatchLater();

  if (watchLaterList.length === 0) return <p>No anime saved yet.</p>;

  return (
    <div>
      {watchLaterList.map((anime) => (
        <div key={anime.mal_id}>
          <h4>{anime.title}</h4>
          <button onClick={() => removeFromWatchLater(anime.mal_id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default WatchLaterList;
