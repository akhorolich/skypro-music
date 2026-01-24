'use client';
import FilterList from './filter-list/ui';
import FilterBtn from './filter-btn/ui';

import { filters } from '../config';
import { selectUniqueItemsFilter } from '../lib/selectUniqueItemsFilter';
import { Track } from '@/shared/model';

import styles from './styles.module.css';

export function Filter({ playlist }: { playlist: Track[] }) {
  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>
      {filters.map((filter) => (
        <FilterBtn
          key={filter.label}
          label={filter.label}
          searchParam={filter.queryName}
        >
          <FilterList
            key={filter.queryName}
            options={selectUniqueItemsFilter(playlist, filter.queryName)}
            searchParam={filter.queryName}
          />
        </FilterBtn>
      ))}
    </div>
  );
}
