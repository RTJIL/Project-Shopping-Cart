import styles from './CustomButton.module.css';

const CustomButton = ({ src, title }) => {
  const isElement = typeof src === 'object' && src !== null;

  return (
    <button className={styles.button}>
      {isElement ? (
        <span>{src}</span>
      ) : (
        <img
          src={src}
          alt="icon"
          style={{ height: '1.6rem', borderRadius: '10px' }}
        />
      )}
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
