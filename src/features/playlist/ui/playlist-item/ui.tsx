import Link from 'next/link';
import styles from './styles.module.css';

export default function PlaylistItem() {
  // { trackTitle, author, album, time }
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
              <span className={styles.track__titleSpan}>Guilt</span>
            </Link>
          </div>
        </div>
        <div className={styles.track__author}>
          <Link className={styles.track__authorLink} href="">
            Nero
          </Link>
        </div>
        <div className={styles.track__album}>
          <Link className={styles.track__albumLink} href="">
            Welcome Reality
          </Link>
        </div>
        <div>
          <svg className={styles.track__timeSvg}>
            <use xlinkHref="/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className={styles.track__timeText}>4:44</span>
        </div>
      </div>
    </div>
  );
}
