import { MdOutlineWatchLater } from 'react-icons/md';
import style from './WatchLater.module.css';

const WatchLater = () => {
  return (
    <div className={style.container}>
      <MdOutlineWatchLater className={style.icon} />
    </div>
  );
};

export default WatchLater;
