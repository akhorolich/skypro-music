import Link from 'next/link';

import type { MockData } from '@/shared/model';

import { trackSelectors } from '@/entities/tracks';
import { useAppSelector } from '@/shared/lib';
import { convertToMin } from '@/widgets/centerblock/lib';
import { cn } from '@/shared/lib';

import { Like } from '@/shared/ui';

import styles from './styles.module.css';

type playlistProps = {
  track: MockData;
  setCurrent: (track: MockData) => void;
};

export function PlaylistItem({ track, setCurrent }: playlistProps) {
  const { isPlaying, currentTrack } = useAppSelector(
    trackSelectors.getPlayback,
  );
  const onpause = !isPlaying && track === currentTrack;
  const listeningNow = isPlaying && track === currentTrack;

  return (
    <div className={styles.playlist__item} onClick={() => setCurrent(track)}>
      <div className={styles.playlist__track}>
        <div className={styles.track__title}>
          <div
            className={cn(styles.track__titleImage, {
              [styles.playing]: listeningNow,
              [styles.pause]: onpause,
            })}
          >
            {listeningNow || onpause ? null : (
              <svg className={styles.track__titleSvg}>
                <use xlinkHref="/icon/sprite.svg#icon-note"></use>
              </svg>
            )}
          </div>
          <div>
            <Link className={styles.track__titleLink} href="">
              <span className={styles.track__titleSpan}>{track.name}</span>
            </Link>
          </div>
        </div>
        <div className={styles.track__author}>
          <Link className={styles.track__authorLink} href="">
            {track.author}
          </Link>
        </div>
        <div className={styles.track__album}>
          <Link className={styles.track__albumLink} href="">
            {track.album}
          </Link>
        </div>
        <div>
          <Like className={styles.track__timeSvg} />
          <span className={styles.track__timeText}>
            {convertToMin(track.duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
}
