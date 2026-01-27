'use client';
import type { Track } from '@/shared/model';
import { cn } from '@/shared/lib';
import { PlaylistItem } from './playlist-item/ui';
import styles from './styles.module.css';

export function Playlist({
  tracks = [],
  isAuth = false,
  setPlayingNow,
}: {
  tracks: Track[];
  isAuth: boolean;
  setPlayingNow: (track: Track) => void;
}) {
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
            <use
              xlinkHref={`${process.env.BASE_PATH}/icon/sprite.svg#icon-watch`}
            ></use>
          </svg>
        </div>
      </div>

      <div className={styles.content__playlist}>
        {tracks.map((track) => (
          <PlaylistItem
            key={track._id}
            track={track}
            isAuth={isAuth}
            setPlayingNow={setPlayingNow}
          />
        ))}
      </div>
    </>
  );
}
