'use client';
import { useEffect } from 'react';
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

export function Playlist({
  playlist = [],
  tag = 'common',
}: {
  playlist: Track[];
  tag: string;
}) {
  const playback = useAppSelector(trackSelectors.getPlayback);
  const dispatch = useAppDispatch();
  const setPlayingNow = (track: Track) => {
    dispatch(trackActions.setCurrentTrack(track));
    dispatch(trackActions.setIsPlaying(true));
  };
  useEffect(() => {
    dispatch(trackActions.setTracks(playlist));
    initQueue(queueList, playlist);
    if (tag === 'favorites') dispatch(trackActions.setFavoriteTracks(playlist));
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
              setPlayingNow={setPlayingNow}
            />
          ))}
        {tag === 'favorites' &&
          playback.favorite.map((track) => (
            <PlaylistItem
              key={track._id}
              track={track}
              setPlayingNow={setPlayingNow}
            />
          ))}
      </div>
    </>
  );
}
