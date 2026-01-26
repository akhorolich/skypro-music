import { Track } from '@/shared/model';
import { QueryParams } from '../../types';
import { releaseDateVariants } from '../../config';

export function selectUniqueItemsFilter(data: Track[], filter: QueryParams) {
  if (filter === 'release_date') return releaseDateVariants;

  const filtered = data
    .map((el) => el[filter])
    .flat(1)
    .sort();

  const unique = new Set(filtered);
  return [...unique];
}
