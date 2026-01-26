export type QueryParams = 'author' | 'release_date' | 'genre';

export type FilterParams = QueryParams | 'search';

export interface FilterSelection {
  label: string;
  queryName: QueryParams;
  options: string[];
}

export interface onlyOne {
  author?: boolean;
  release_date?: boolean;
  genre?: boolean;
  search?: boolean;
}
