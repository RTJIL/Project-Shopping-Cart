import styles from './HomeInfo.module.css';

const HomeInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <span>Odin Roll</span>
        <span>
          This site is a fan-made demo and does NOT host or stream any official
          anime content. All anime titles, images, and logos belong to their
          respective owners and copyright holders. This platform is for
          entertainment and educational purposes only. We do not claim any
          rights over the content featured or referenced here. Please support
          the official creators by watching anime on licensed platforms. Use
          this site responsibly and at your own risk. No piracy encouraged —
          just pure anime love!
        </span>
        <span>Enjoy</span>
      </div>
      <div className={styles.links}>
        <div className={styles.github}></div>
        <div className={styles.api}></div>
      </div>
    </div>
  );
};

export default HomeInfo;
