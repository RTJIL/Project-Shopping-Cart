import styles from './HomeNav.module.css';
import Button from '../Button/CustomButton';
import { FaRandom } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { FaMedal } from "react-icons/fa";

const HomeNav = () => {
  return (
    <div className={styles.homeNavContainer}>
      <h3 className={styles.h3}>Quick Navigation</h3>
      <Button src={<MdVideoLibrary size={'1.6rem'}/>} title={'Library'} link={'/library'}/>
      <Button src={<FaRandom size={'1.6rem'}/>} title={'Random'} link={'/library/random'}/>
      <Button src={<FaTrophy size={'1.6rem'}/>} title={'Top Anime'} link={'/library/top-anime'}/>
      <Button src={<FaMedal size={'1.6rem'}/>} title={'Top Manga'} link={'/library/top-manga'}/>
      <Button src={<IoMdPerson size={'1.6rem'}/>} title={'Top Characters'} link={'/library/top-characters'}/>
    </div>
  );
};

export default HomeNav;
