import { cn } from '@/shared/lib';
import styles from './styles.module.css';

type controlsProps = {
  onPlay?: () => void;
  onPause?: () => void;
  onToggle?: () => void;
  isPlaying?: boolean;
};

export function PlayerControls({
  onPlay,
  onPause,
  onToggle,
  isPlaying,
}: controlsProps) {
  return (
    <>
      <div className={styles.player__controls}>
        <div className={styles.player__btnPrev}>
          <svg className={styles.player__btnPrevSvg}>
            <use xlinkHref="/icon/sprite.svg#icon-prev"></use>
          </svg>
        </div>
        <div className={cn(styles.player__btnPlay, 'btn')} onClick={onToggle}>
          {isPlaying ? (
            <svg className={styles.player__btnPlaySvg}>
              <use xlinkHref="/icon/sprite.svg#icon-pause"></use>
            </svg>
          ) : (
            <svg className={styles.player__btnPlaySvg}>
              <use xlinkHref="/icon/sprite.svg#icon-play"></use>
            </svg>
          )}
        </div>
        <div className={styles.player__btnNext}>
          <svg className={styles.player__btnNextSvg}>
            <use xlinkHref="/icon/sprite.svg#icon-next"></use>
          </svg>
        </div>
        <div className={cn(styles.player__btnRepeat, 'btnIcon')}>
          <svg className={styles.player__btnRepeatSvg}>
            <use xlinkHref="/icon/sprite.svg#icon-repeat"></use>
          </svg>
        </div>
        <div className={cn(styles.player__btnShuffle, 'btnIcon')}>
          <svg className={styles.player__btnShuffleSvg}>
            <use xlinkHref="/icon/sprite.svg#icon-shuffle"></use>
          </svg>
        </div>
      </div>
    </>
  );
}
