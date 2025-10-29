import { Filter } from '@/features/filter';
import { Playlist } from './playlist';
import { SearchInput } from './search-input/ui';

import styles from './styled.module.css';

export function Centerblock() {
  return (
    <div className={styles.centerblock}>
      <SearchInput />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <Filter />
      <div className={styles.centerblock__content}>
        <Playlist />
      </div>
    </div>
  );
}
