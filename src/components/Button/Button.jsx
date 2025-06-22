import styles from './Button.module.css';

const Button = ({ src, title }) => {
  return (
    <button className={styles.button}>
      <img src={src} alt="icon" />
      <span>{title}</span>
    </button>
  );
};

export default Button;
