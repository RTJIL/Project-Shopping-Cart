//Background.jsx

import styles from './Background.module.css';

//assets
import eyeVideo2k from '/src/assets/eyeVideo2k.mp4';
import eyeVideo1080p from '/src/assets/eyeVideo1080p.mp4';
import eyeVideoMobile from '/src/assets/eyeVideoMobile.mp4';

const Background = () => {
  const handleLoadedData = (e) => {
    console.log('Loaded video:', e.target.currentSrc);
  };
  return (
    <video
      muted
      loop
      autoPlay
      playsInline
      className={styles.bgVideo}
      onLoadedData={handleLoadedData}
    >
      <source src={eyeVideo2k} type="video/mp4" media="(min-width: 1000px)" />
      <source src={eyeVideo1080p} type="video/mp4" media="(min-width: 500px)" />
      <source
        src={eyeVideoMobile}
        type="video/mp4"
        media="(max-width: 500px)"
      />
      Your browser doesn't support the video tag
    </video>
  );
};

export default Background;
