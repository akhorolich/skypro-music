'use client';
import { useEffect, useState } from 'react';
import { useUrlFilters } from '../lib';
import type { Track } from '@/shared/model';

import {
  initQueue,
  queueList,
  trackActions,
  trackSelectors,
} from '@/entities/tracks';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { getAllFavoriteTracks } from '@/entities/tracks/api';
import { authorizationSelectors } from '@/entities/auth';

import { Playlist } from './playlist';
import { Filter } from '@/features/filter';
import { SearchInput } from './search-input/ui';
import styles from './styled.module.css';

type CenterblockProps = {
  title: string;
  playlistData: { tag: string; playlist: Track[] };
};

export function Centerblock({ title, playlistData }: CenterblockProps) {
  const access = useAppSelector(authorizationSelectors.access);
  const isAuthStore = useAppSelector(authorizationSelectors.isAuth);
  const playback = useAppSelector(trackSelectors.getPlayback);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const { tracksWithFilters, filterByReleaseOn } = useUrlFilters(
    playlistData.playlist,
  );

  const setPlayingNow = (track: Track) => {
    dispatch(trackActions.setCurrentTrack(track));
    dispatch(trackActions.setIsPlaying(true));
  };

  useEffect(() => {
    setIsAuth(isAuthStore);
  }, [isAuthStore]);

  useEffect(() => {
    const initTrackQueue = async () => {
      dispatch(trackActions.setTracks(tracksWithFilters));
      initQueue(queueList, tracksWithFilters);
      if (isAuthStore && access) {
        getAllFavoriteTracks(access).then((favorites) =>
          dispatch(trackActions.setFavoriteTracks(favorites?.data.data || [])),
        );
      }
    };
    initTrackQueue();
  }, [tracksWithFilters.length, filterByReleaseOn]);

  const displayTracks =
    playlistData.tag === 'favorites' ? playback.favorite : tracksWithFilters;

  return (
    <div className={styles.centerblock}>
      <SearchInput />
      <h2 className={styles.centerblock__h2}>{title}</h2>
      <Filter playlist={playlistData.playlist} />
      <div className={styles.centerblock__content}>
        <Playlist
          tracks={displayTracks}
          isAuth={isAuth}
          setPlayingNow={setPlayingNow}
        />
      </div>
    </div>
  );
}
