import logo from '/src/assets/Logo.png';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <button className={styles.logoContainer} onClick={() => {
      window.open('http://localhost:5173/')
    }}>
      <span>ODIN</span>
      <img src={logo} alt="logo" style={{ height: '4rem', display: 'block' }} />
      <span>ROLL</span>
    </button>
  );
};

export default Logo;
