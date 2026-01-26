import { type FilterSelection } from '../types';

export const filters: FilterSelection[] = [
  { label: 'иполнителю', queryName: 'author', options: [] },
  { label: 'году выпуска', queryName: 'release_date', options: [] },
  { label: 'жанру', queryName: 'genre', options: [] },
];

export const releaseDateVariants = [
  'Сначала новые',
  'Сначала старые',
  'По умолчанию',
];

export enum ReleaseDateVariants {
  'ASC' = 'Сначала новые',
  'DESC' = 'Сначала старые',
  'DEFAULT' = 'По умолчанию',
}
