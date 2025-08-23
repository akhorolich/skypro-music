import VolumeBar from './volume-bar/ui';
import PlayerControls from './player-controls/ui';
import LikeOrDislike from './like-dislike/ui';
import PlayedTrack from './played-track/ui';

import styles from './styles.module.css';

export default function TrackBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__content}>
        <div className={styles.bar__playerProgress}></div>
        <div className={styles.bar__playerBlock}>
          <div className={styles.bar__player}>
            <PlayerControls />
            <div className={styles.player__trackPlay}>
              <PlayedTrack />
              <LikeOrDislike />
            </div>
          </div>
          <VolumeBar />
        </div>
      </div>
    </div>
  );
}
