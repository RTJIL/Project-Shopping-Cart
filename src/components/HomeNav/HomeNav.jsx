import styles from './HomeNav.module.css';
import Button from '../Button/CustomButton';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

const HomeNav = () => {
  return (
    <div className={styles.container}>
      <h3>Quick Navigation</h3>
      <Button src={<GiPerspectiveDiceSixFacesRandom size={'1.6rem'}/>} title={'Random'} />
      <Button src={<GiPerspectiveDiceSixFacesRandom size={'1.6rem'}/>} title={'Random'} />
      <Button src={<GiPerspectiveDiceSixFacesRandom size={'1.6rem'}/>} title={'Random'} />
      <Button src={<GiPerspectiveDiceSixFacesRandom size={'1.6rem'}/>} title={'Random'} />
    </div>
  );
};

export default HomeNav;
