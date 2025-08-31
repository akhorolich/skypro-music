import { cn } from '@/shared/lib';
import styles from './styles.module.css';

export default function VolumeBar() {
  return (
    <>
      <div className={styles.bar__volumeBlock}>
        <div className={styles.volume__content}>
          <div className={styles.volume__image}>
            <svg className={styles.volume__svg}>
              <use xlinkHref="/icon/sprite.svg#icon-volume"></use>
            </svg>
          </div>
          <div className={cn(styles.volume__progress, 'btn')}>
            <input
              className={cn(styles.volume__progressLine, 'btn')}
              type="range"
              name="range"
            />
          </div>
        </div>
      </div>
    </>
  );
}
