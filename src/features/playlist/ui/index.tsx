import cn from '@/shared/lib/classnames';
import PlaylistItem from './playlist-item';
import styles from './styles.module.css';

export default function Playlist() {
  return (
    <>
      <div className={styles.content__title}>
        <div className={cn(styles.playlistTitle__col, styles.col01)}>Трек</div>
        <div className={cn(styles.playlistTitle__col, styles.col02)}>
          Исполнитель
        </div>
        <div className={cn(styles.playlistTitle__col, styles.col03)}>
          Альбом
        </div>
        <div className={cn(styles.playlistTitle__col, styles.col04)}>
          <svg className={styles.playlistTitle__svg}>
            <use xlinkHref="/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
      <div className={styles.content__playlist}>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <PlaylistItem key={index} />
          ))}
      </div>
    </>
  );
}
