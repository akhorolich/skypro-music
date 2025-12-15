'use client';
import type { Track } from '@/shared/model';
import { Playlist } from './playlist';
import { Filter } from '@/features/filter';
import { SearchInput } from './search-input/ui';

import styles from './styled.module.css';

export function Centerblock({
  playlist,
  title,
}: {
  playlist: Track[];
  title: string;
}) {
  return (
    <div className={styles.centerblock}>
      <SearchInput />
      <h2 className={styles.centerblock__h2}>{title}</h2>
      <Filter playlist={playlist} />
      <div className={styles.centerblock__content}>
        <Playlist playlist={playlist} />
      </div>
    </div>
  );
}
