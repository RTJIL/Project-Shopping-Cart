import styles from './HomeNav.module.css';
import Button from '../Button/CustomButton';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { IoMdPerson } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { ImFilm } from "react-icons/im";

const HomeNav = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Quick Navigation</h3>
      <Button src={<GiPerspectiveDiceSixFacesRandom size={'1.6rem'}/>} title={'Random'} />
      <Button src={<ImFilm size={'1.6rem'}/>} title={'Top Anime'} />
      <Button src={<FaBook size={'1.6rem'}/>} title={'Top Manga'} />
      <Button src={<IoMdPerson size={'1.6rem'}/>} title={'Top Characters'} />
    </div>
  );
};

export default HomeNav;
