import FilterList from './filter-list/ui';
import FilterBtn from './filter-btn/ui';

import { filters } from '../config';
import { selectUniqueItemsFilter } from '../model';
import { useQueryParams } from '@/shared/lib';

import styles from './styles.module.css';
import { trackSelectors } from '@/entities/tracks';
import { useAppSelector } from '@/shared/lib/redux-select-dispatch';

export function Filter() {
  const { push } = useQueryParams();
  const tracks = useAppSelector(trackSelectors.getTracks);
  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>
      {filters.map((filter) => (
        <FilterBtn
          key={filter.label}
          label={filter.label}
          pushSearchParams={push}
          searchParam={filter.queryName}
        >
          <FilterList
            key={filter.queryName}
            options={selectUniqueItemsFilter(tracks, filter.queryName)}
            pushSearchParams={push}
          />
        </FilterBtn>
      ))}
    </div>
  );
}
