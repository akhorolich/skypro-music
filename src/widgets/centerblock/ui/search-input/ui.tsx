'use client';
import { useState } from 'react';
import { useFilter } from '@/features/filter/lib/useFilter';
import { debounce } from '@/shared/lib/debounce';

import { Input } from '@/shared/ui';
import styles from './styles.module.css';
import { cn } from '@/shared/lib';

export function SearchInput() {
  const { filter } = useFilter();
  const [searchQuery, setSearchQuery] = useState('');

  const debounecedAddCategory = debounce(500, filter);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    debounecedAddCategory('search', value);
  };

  return (
    <div className={styles.centerblock__search}>
      <svg className={styles.search__svg}>
        <use
          xlinkHref={`${process.env.BASE_PATH}/icon/sprite.svg#icon-search`}
        ></use>
      </svg>
      <Input
        className={cn(styles['ps__text'], styles.search__text)}
        type="search"
        placeholder="Поиск"
        name="search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
}
