import { cn } from '@/shared/lib';
import styles from './styles.module.css';
interface volumeProps {
  max: number;
  step: number;
  value: number;
  onMuted: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function VolumeBar({
  max,
  step,
  value,
  onMuted,
  onChange,
}: volumeProps) {
  return (
    <>
      <div className={styles.bar__volumeBlock}>
        <div className={styles.volume__content}>
          <div className={styles.volume__image} onClick={onMuted}>
            <svg className={styles.volume__svg}>
              <use
                xlinkHref={`${process.env.BASE_PATH}/icon/sprite.svg#icon-volume`}
              ></use>
            </svg>
          </div>
          <div className={cn(styles.volume__progress, 'btn')}>
            <input
              className={cn(styles.volume__progressLine, 'btn')}
              type="range"
              name="range"
              max={max}
              min={0}
              value={value}
              step={step}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
