import Link from 'next/link';

import { useAppSelector } from '@/shared/lib';
import { trackSelectors } from '@/entities/tracks';

import styles from './styles.module.css';

export function PlayedTrack() {
  const track = useAppSelector(trackSelectors.getPlayback);

  return (
    <>
      <div className={styles.trackPlay__image}>
        <svg className={styles.trackPlay__svg}>
          <use xlinkHref="/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className={styles.trackPlay__contain}>
        <div className={styles.trackPlay__author}>
          <Link className={styles.trackPlay__authorLink} href="">
            {track.currentTrack?.name || null}
          </Link>
        </div>
        <div className={styles.trackPlay__album}>
          <Link className={styles.trackPlay__albumLink} href="">
            {track.currentTrack?.album || null}
          </Link>
        </div>
      </div>
    </>
  );
}
