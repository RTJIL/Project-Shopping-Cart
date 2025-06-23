import React, { createContext, useState, useContext, useEffect } from 'react';

const WatchLaterContext = createContext();

export const WatchLaterProvider = ({ children }) => {
  const [watchLaterList, setWatchLaterList] = useState(() => {

    const saved = localStorage.getItem('watchLaterList');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('watchLaterList', JSON.stringify(watchLaterList));
  }, [watchLaterList]);

  const addToWatchLater = (anime) => {
    setWatchLaterList((prev) => {
        
      if (prev.find((item) => item.mal_id === anime.mal_id)) return prev;
      return [...prev, anime];
    });
  };

  const removeFromWatchLater = (mal_id) => {
    setWatchLaterList((prev) => prev.filter((item) => item.mal_id !== mal_id));
  };

  return (
    <WatchLaterContext.Provider
      value={{ watchLaterList, addToWatchLater, removeFromWatchLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLater = () => useContext(WatchLaterContext);
