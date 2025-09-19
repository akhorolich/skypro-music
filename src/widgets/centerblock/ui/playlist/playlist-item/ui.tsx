import Link from 'next/link';
import { MockData } from '@/shared/model';
import { convertToMin } from '../../../lib/index';

import styles from './styles.module.css';

export function PlaylistItem(track: MockData) {
  return (
    <div className={styles.playlist__item}>
      <div className={styles.playlist__track}>
        <div className={styles.track__title}>
          <div className={styles.track__titleImage}>
            <svg className={styles.track__titleSvg}>
              <use xlinkHref="/icon/sprite.svg#icon-note"></use>
            </svg>
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
          <svg className={styles.track__timeSvg}>
            <use xlinkHref="/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className={styles.track__timeText}>
            {convertToMin(track.duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
}
