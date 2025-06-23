import { MdOutlineWatchLater } from 'react-icons/md';
import { useWatchLater } from '../WatchLaterContext/WatchLaterContext';
import style from './WatchLater.module.css';
import { useNavigate } from 'react-router-dom';

const WatchLater = () => {
  const { watchLaterList } = useWatchLater();
  const navigate = useNavigate();

  return (
    <div className={style.container} onClick={() => navigate('/watch-later')}>
      <MdOutlineWatchLater className={style.icon} />
      {watchLaterList.length > 0 && (
        <span className={style.count}>{watchLaterList.length}</span>
      )}
    </div>
  );
};

export default WatchLater;
