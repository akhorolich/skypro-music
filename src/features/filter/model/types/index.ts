export type QueryParams = 'author' | 'release_date' | 'genre';

export default interface FilterSelection {
  label: string;
  queryName: QueryParams;
  options: string[];
}
