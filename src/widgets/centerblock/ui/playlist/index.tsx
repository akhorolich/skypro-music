'use client';
import { useEffect } from 'react';

import {
  initQueue,
  queueList,
  trackSelectors,
  trackActions,
} from '@/entities/tracks';
import { MockData } from '@/shared/model';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { data } from '@/shared/api';
import { cn } from '@/shared/lib';

import { PlaylistItem } from './playlist-item/ui';

import styles from './styles.module.css';

export function Playlist() {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector(trackSelectors.getTracks);
  initQueue(queueList, tracks);

  const setTrack = (track: MockData) => {
    dispatch(trackActions.setCurrentTrack(track));
    dispatch(trackActions.setIsPlaying(true));
  };

  useEffect(() => {
    dispatch(trackActions.setTracks(data));
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
        {tracks?.map((track) => (
          <PlaylistItem key={track._id} track={track} setCurrent={setTrack} />
        ))}
      </div>
    </>
  );
}
