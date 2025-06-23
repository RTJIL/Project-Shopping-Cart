import { MdOutlineWatchLater } from "react-icons/md";
import style from './WatchLater.module.css';

const WatchLater = () => {
  return (
    <div className={style.container}>
      <MdOutlineWatchLater className={style.icon} color="rgb(59, 59, 59)"/>
    </div>
  );
};

export default WatchLater;
