import { useRef } from 'react';

import { useAppSelector } from '@/shared/lib/redux-select-dispatch';
import { getCurrentTrack } from '@/entities/tracks';
import { usePlayerControls } from '@/features/audio';

import { VolumeBar } from './volume-bar/ui';
import { PlayerControls } from './player-controls/ui';
import { LikeOrDislike } from './like-dislike/ui';
import { PlayedTrack } from './played-track/ui';
import { AudioPlayer } from '@/shared/ui/audio';

import styles from './styles.module.css';

export function TrackBar() {
  const current = useAppSelector(getCurrentTrack);
  const audioRef = useRef<HTMLAudioElement>(null);
  const controls = usePlayerControls(audioRef);

  return (
    <div className={styles.bar}>
      <AudioPlayer
        ref={audioRef}
        controls={true}
        src={current.value?.track_file}
        autoPlay={current.isPlaying}
      />
      <div className={styles.bar__content}>
        <div className={styles.bar__playerProgress}></div>
        <div className={styles.bar__playerBlock}>
          <div className={styles.bar__player}>
            <PlayerControls
              onToggle={controls.toggle}
              isPlaying={current.isPlaying}
            />
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
