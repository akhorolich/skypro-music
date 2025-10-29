import cn from '@/shared/lib/classnames';
import styles from './styles.module.css';

export default function LikeOrDislike() {
  return (
    <>
      <div className={styles.trackPlay__likeDis}>
        <div className={cn(styles.trackPlay__like, 'btnIcon')}>
          <svg className={styles.trackPlay__likeSvg}>
            <use xlinkHref="/icon/sprite.svg#icon-like"></use>
          </svg>
        </div>
        <div className={cn(styles.trackPlay__dislike, 'btnIcon')}>
          <svg className={styles.trackPlay__dislikeSvg}>
            <use xlinkHref="/icon/sprite.svg#icon-dislike"></use>
          </svg>
        </div>
      </div>
    </>
  );
}
