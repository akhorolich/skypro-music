import { onlyOne, QueryParams } from '@/features/filter/types';

export const updateQueryValuesFilter = (
  query: QueryParams,
  selectedValue: string,
  currentFilterValues: string[],
  addOnlyOne: onlyOne,
): string[] => {
  if (addOnlyOne[query]) return [selectedValue];

  return currentFilterValues.includes(selectedValue)
    ? currentFilterValues.filter((value) => value !== selectedValue)
    : [...currentFilterValues, selectedValue];
};
