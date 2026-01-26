'use client';
import { useEffect, useState } from 'react';
import type { Track } from '@/shared/model';
import {
  initQueue,
  queueList,
  trackActions,
  trackSelectors,
} from '@/entities/tracks';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { cn } from '@/shared/lib';

import { PlaylistItem } from './playlist-item/ui';
import styles from './styles.module.css';
import { getAllFavoriteTracks } from '@/entities/tracks/api';
import { authorizationSelectors } from '@/entities/auth';

export function Playlist({
  playlist = [],
  tag = 'common',
}: {
  playlist: Track[];
  tag: string;
}) {
  const access = useAppSelector(authorizationSelectors.access);
  const playback = useAppSelector(trackSelectors.getPlayback);
  const isAuthStore = useAppSelector(authorizationSelectors.isAuth);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const setPlayingNow = (track: Track) => {
    dispatch(trackActions.setCurrentTrack(track));
    dispatch(trackActions.setIsPlaying(true));
  };

  useEffect(() => {
    setIsAuth(isAuthStore);
  }, [isAuthStore]);

  useEffect(() => {
    dispatch(trackActions.setTracks(playlist));
    initQueue(queueList, playlist);
    if (isAuthStore && access) {
      getAllFavoriteTracks(access).then((favorites) =>
        dispatch(trackActions.setFavoriteTracks(favorites?.data.data || [])),
      );
    }
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
            <use
              xlinkHref={`${process.env.BASE_PATH}/icon/sprite.svg#icon-watch`}
            ></use>
          </svg>
        </div>
      </div>

      <div className={styles.content__playlist}>
        {tag === 'common' &&
          playlist.map((track) => (
            <PlaylistItem
              key={track._id}
              track={track}
              isAuth={isAuth}
              setPlayingNow={setPlayingNow}
            />
          ))}
        {tag === 'favorites' &&
          playback.favorite.map((track) => (
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
