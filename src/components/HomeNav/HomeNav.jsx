import styles from './HomeNav.module.css';
import Button from '../Button/Button';
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const HomeNav = () => {
  return (
    <div className={styles.container}>
      <h3>Quick Navigation</h3>
      <Button src={GiPerspectiveDiceSixFacesRandom} title={'sdfsd'}/>
    </div>
  );
};

export default HomeNav;
