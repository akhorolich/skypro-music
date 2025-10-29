import Link from 'next/link';
import styles from './styles.module.css';
import { useAppSelector } from '@/shared/lib/redux-select-dispatch';
import { getCurrentTrack } from '@/entities/tracks';

export function PlayedTrack() {
  const track = useAppSelector(getCurrentTrack);

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
            {track.value?.name || 'тут должно быть название'}
          </Link>
        </div>
        <div className={styles.trackPlay__album}>
          <Link className={styles.trackPlay__albumLink} href="">
            {track.value?.author || 'а тут имя автора'}
          </Link>
        </div>
      </div>
    </>
  );
}
