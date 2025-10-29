import { useEffect } from 'react';

import { PlaylistItem } from './playlist-item/ui';

import {
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib/redux-select-dispatch';
import { getTracks, setCurrentTrack, setTracks } from '@/entities/tracks';
import { MockData } from '@/shared/model';
import { cn } from '@/shared/lib';

import styles from './styles.module.css';

export function Playlist() {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector(getTracks);

  const setCurrent = (track: MockData) => {
    dispatch(setCurrentTrack(track));
  };

  useEffect(() => {
    dispatch(setTracks());
  }, []);

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
        {tracks?.map((track) => (
          <PlaylistItem key={track._id} track={track} setCurrent={setCurrent} />
        ))}
      </div>
    </>
  );
}
