import { MockData } from '@/shared/model';
import { QueryParams } from '../types';

export function selectUniqueItemsFilter(data: MockData[], filter: QueryParams) {
  const filtered = data
    .map((el) => el[filter])
    .flat(1)
    .sort();

  const unique = new Set(filtered);
  return [...unique];
}
