import logo from '/src/assets/Logo.png';
import styles from './Logo.module.css';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <button
      className={styles.logoContainer}
      onClick={() => {
        navigate('/');
      }}
    >
      <span>ODIN</span>
      <img src={logo} alt="logo" style={{ height: '4rem', display: 'block' }} />
      <span>ROLL</span>
    </button>
  );
};

export default Logo;
