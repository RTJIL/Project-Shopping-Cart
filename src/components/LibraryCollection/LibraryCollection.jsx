//LibraryCollection.jsx

import styles from './LibraryCollection.module.css';
import LibraryCard from '../LibraryCard/LibraryCard';
import { useEffect, useState } from 'react';

const LibraryCollection = () => {
  const [data, setData] = useState(null); // To store fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime?genres=1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className={styles.loadingContainer}>
        <p>Loading...</p>
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.libraryCollectionContainer}>
      {data.map((item) => (
        <LibraryCard
          key={item.mal_id}
          img={item.images?.jpg?.image_url}
          title={item.title}
          genre={item.genres.map((g) => g.name).join(', ')}
          score={item.score ?? 'N/A'}
          mal_id={item.mal_id}
          animeData={item} // Pass full anime data here
        />
      ))}
    </div>
  );
};

export default LibraryCollection;
