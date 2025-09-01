import FilterList from './filter-list/ui';
import FilterBtn from './filter-btn/ui';

import { MockData } from '@/shared/model';
import { filters } from '../config';
import { selectUniqueItemsFilter } from '../model';

import styles from './styles.module.css';

type filterProps = { filteringTracks: MockData[] };

export default function Filter({ filteringTracks }: filterProps) {
  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>
      {filters.map((filter) => (
        <FilterBtn key={filter.label} label={filter.label}>
          <FilterList
            key={filter.queryName}
            options={selectUniqueItemsFilter(filteringTracks, filter.queryName)}
          />
        </FilterBtn>
      ))}
    </div>
  );
}
