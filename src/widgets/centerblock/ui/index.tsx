'use client';
import type { Track } from '@/shared/model';
import { Playlist } from './playlist';
import { Filter } from '@/features/filter';
import { SearchInput } from './search-input/ui';

import styles from './styled.module.css';

export function Centerblock({
  playlistData,
  title,
}: {
  playlistData: { tag: string; playlist: Track[] };
  title: string;
}) {
  return (
    <div className={styles.centerblock}>
      <SearchInput />
      <h2 className={styles.centerblock__h2}>{title}</h2>
      <Filter playlist={playlistData.playlist} />
      <div className={styles.centerblock__content}>
        <Playlist playlist={playlistData.playlist} tag={playlistData.tag} />
      </div>
    </div>
  );
}
