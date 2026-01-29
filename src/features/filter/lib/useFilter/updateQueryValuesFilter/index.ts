import { FilterParams, onlyOne } from '@/features/filter/types';

export const updateQueryValuesFilter = (
  query: FilterParams,
  selectedValue: string,
  currentFilterValues: string[],
  addOnlyOne: onlyOne,
): string[] => {
  if (addOnlyOne[query] && !currentFilterValues.includes(selectedValue))
    return [selectedValue];
  else [];

  return currentFilterValues.includes(selectedValue)
    ? currentFilterValues.filter((value) => value !== selectedValue)
    : [...currentFilterValues, selectedValue];
};
