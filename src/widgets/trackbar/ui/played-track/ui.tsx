import Link from 'next/link';
import styles from './styles.module.css';

export function PlayedTrack() {
  return (
    <>
      <div className={styles.trackPlay__contain}>
        <div className={styles.trackPlay__image}>
          <svg className={styles.trackPlay__svg}>
            <use xlinkHref="/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div className={styles.trackPlay__author}>
          <Link className={styles.trackPlay__authorLink} href="">
            Ты та...
          </Link>
        </div>
        <div className={styles.trackPlay__album}>
          <Link className={styles.trackPlay__albumLink} href="">
            Баста
          </Link>
        </div>
      </div>
    </>
  );
}
