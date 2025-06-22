import logo from '/src/assets/Logo.png';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <span>ODIN</span>
      <img src={logo} alt="logo" style={{ height: '4rem', display: 'block' }} />
      <span>ROLL</span>
    </div>
  );
};

export default Logo;
