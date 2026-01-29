interface IUrlParams {
  author?: string;
  genre?: string;
  release_date?: string;
  search?: string;
  [key: string]: string | undefined;
}

type FilterCB = (value: string) => boolean;
