import Link from 'next/link';

import { MockData } from '@/shared/model';
import { useAppSelector } from '@/shared/lib/redux-select-dispatch';
import { convertToMin } from '../../../lib/index';
import { cn } from '@/shared/lib';

import { Like } from '@/shared/ui';

import styles from './styles.module.css';
import { getCurrentTrack } from '@/entities/tracks';

type playlistProps = {
  track: MockData;
  setCurrent: (track: MockData) => void;
};

export function PlaylistItem({ track, setCurrent }: playlistProps) {
  const { isPlaying, value } = useAppSelector(getCurrentTrack);
  const listeningNow = isPlaying && track === value;
  return (
    <div className={styles.playlist__item} onClick={() => setCurrent(track)}>
      <div className={styles.playlist__track}>
        <div className={styles.track__title}>
          <div
            className={cn(styles.track__titleImage, {
              [styles.playing]: listeningNow,
            })}
          >
            {listeningNow ? null : (
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
