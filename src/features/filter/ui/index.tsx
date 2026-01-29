'use client';
import { usePathname, useRouter } from 'next/navigation';
import FilterList from './filter-list/ui';
import FilterBtn from './filter-btn/ui';

import { selectUniqueItemsFilter } from '../lib/selectUniqueItemsFilter';
import { useFilter } from '../lib/useFilter';
import { filters } from '../config';
import { Track } from '@/shared/model';
import { cn } from '@/shared/lib';

import styles from './styles.module.css';

export function Filter({ playlist }: { playlist: Track[] }) {
  const { isFiltered } = useFilter();
  const router = useRouter();
  const pathname = usePathname();

  const clearFilters = () => router.push(pathname);

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
      <button
        title="Очистить фильтры"
        className={cn(styles.clear__filters, {
          [styles.clear__filters_hide]: !isFiltered,
        })}
        onClick={clearFilters}
      >
        X
      </button>
    </div>
  );
}
