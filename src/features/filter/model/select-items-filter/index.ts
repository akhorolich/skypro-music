import { MockData } from '@/shared/model';
import { QueryParams } from '../types';

export default function selectUniqueItemsFilter(
  data: MockData[],
  filter: QueryParams,
) {
  const filtred = data
    .map((el) => el[filter])
    .flat(1)
    .sort();

  const unique = new Set(filtred);
  return [...unique];
}
