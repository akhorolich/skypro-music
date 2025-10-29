import { useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { trackSelectors } from '@/entities/tracks';
import { usePlayerControls } from '@/features/audio';

import { VolumeBar } from './volume-bar/ui';
import { ProgressBar } from './progress-bar/ui';
import { PlayerControls } from './player-controls/ui';
import { LikeOrDislike } from './like-dislike/ui';
import { PlayedTrack } from './played-track/ui';
import { AudioPlayer } from '@/shared/ui/audio';

import styles from './styles.module.css';

export function TrackBar() {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector(trackSelectors.getTracks);
  const playback = useAppSelector(trackSelectors.getPlayback);
  const controls = useAppSelector(trackSelectors.getControls);
  const audioRef = useRef<HTMLAudioElement>(null);

  const trackEvents = usePlayerControls({
    ref: audioRef,
    playback,
    controls,
    tracks,
    emit: dispatch,
  });

  return (
    <div className={styles.bar}>
      <AudioPlayer
        ref={audioRef}
        controls={true}
        src={playback.currentTrack?.track_file}
        loop={controls.repeatOn}
        autoPlay
      />
      <ProgressBar
        audioRef={audioRef}
        max={100}
        value={trackEvents.progress}
        step={0.1}
        onChange={trackEvents.rewindTrack}
        readOnly
      />
      <div className={styles.bar__content}>
        <div className={styles.bar__playerBlock}>
          <div className={styles.bar__player}>
            <PlayerControls
              shuffleOn={controls.shuffleOn}
              repeatOn={controls.repeatOn}
              isPlaying={playback.isPlaying}
              onToggle={trackEvents.toggle}
              onNext={trackEvents.next}
              onPrev={trackEvents.prev}
              onShuffle={trackEvents.shuffle}
              onRepeat={trackEvents.repeat}
            />
            <div className={styles.player__trackPlay}>
              <PlayedTrack />
              <LikeOrDislike />
            </div>
          </div>
          <VolumeBar
            max={1}
            value={controls.volume}
            step={0.1}
            onMuted={trackEvents.muted}
            onChange={trackEvents.changeVolume}
          />
        </div>
      </div>
    </div>
  );
}
