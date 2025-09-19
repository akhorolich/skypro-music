export type QueryParams = 'author' | 'release_date' | 'genre';

export interface FilterSelection {
  label: string;
  queryName: QueryParams;
  options: string[];
}
