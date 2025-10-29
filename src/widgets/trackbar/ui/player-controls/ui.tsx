import { cn } from '@/shared/lib';
import styles from './styles.module.css';

type controlsProps = {
  onPlay?: () => void;
  onPause?: () => void;
  onToggle?: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  onShuffle?: () => void;
  onRepeat?: () => void;
  isPlaying?: boolean;
  shuffleOn: boolean;
  repeatOn: boolean;
};

export function PlayerControls({
  onPlay,
  onPause,
  onToggle,
  onNext,
  onPrev,
  onShuffle,
  onRepeat,
  shuffleOn,
  repeatOn = false,
  isPlaying,
}: controlsProps) {
  return (
    <>
      <div className={styles.player__controls}>
        <div className={styles.player__btnPrev} onClick={onPrev}>
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
        <div className={styles.player__btnNext} onClick={onNext}>
          <svg className={styles.player__btnNextSvg}>
            <use xlinkHref="/icon/sprite.svg#icon-next"></use>
          </svg>
        </div>
        <div
          className={cn(styles.player__btnRepeat, 'btnIcon')}
          onClick={onRepeat}
        >
          <svg
            className={cn(styles.player__btnRepeatSvg, {
              [styles.active]: repeatOn,
            })}
          >
            <use xlinkHref="/icon/sprite.svg#icon-repeat"></use>
          </svg>
        </div>
        <div
          className={cn(styles.player__btnShuffle, 'btnIcon')}
          onClick={onShuffle}
        >
          <svg
            className={cn(styles.player__btnShuffleSvg, {
              [styles.active]: shuffleOn,
            })}
          >
            <use xlinkHref="/icon/sprite.svg#icon-shuffle"></use>
          </svg>
        </div>
      </div>
    </>
  );
}
