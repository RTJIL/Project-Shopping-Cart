import styles from './CustomButton.module.css';

const CustomButton = ({ src, title, link }) => {
  const isElement = typeof src === 'object' && src !== null;

  const handleCklick = () => {
    window.open(link)
  }

  return (
    <button className={styles.button} onClick={handleCklick}>
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
