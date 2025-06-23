import styles from './HomeInfo.module.css';
import CustomButton from '../Button/CustomButton';
import { FaGithub } from 'react-icons/fa';
import JikanApi from '/src/assets/JikanApi.png';

const HomeInfo = () => {
  return (
    <div className={styles.homeInfoContainer}>
      <div className={styles.description}>
        <h1 className={styles.h1}>Odin Roll</h1>
        <span style={{ marginTop: '20px' }}>
          This is a fan-made demo. No anime is hosted or streamed here. All
          content belongs to its rightful owners. Support the official releases.
          No piracy just anime love!
        </span>
        <div style={{ marginTop: '20px' }}>Enjoy😁</div>
      </div>
      <div className={styles.links}>
        <CustomButton
          src={<FaGithub size={'1.6rem'} color="black" />}
          title={'Davydov Artem'}
          link={'https://github.com/RTJIL'}
        />
        <CustomButton
          src={JikanApi}
          title={'Jikan API'}
          link={'https://jikan.moe/'}
        />
      </div>
    </div>
  );
};

export default HomeInfo;
