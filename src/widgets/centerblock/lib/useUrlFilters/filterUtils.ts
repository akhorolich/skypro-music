import { ReleaseDateVariants } from '@/features/filter/config';
import { Track } from '@/shared/model';

const deletePercentChar = (filterParamData: string) =>
  filterParamData.split('%').join(' ');

const normaliseFilterData = (paramKeyData?: string) => {
  if (!paramKeyData) return [];
  return paramKeyData.split(' ').map(deletePercentChar);
};

export const getFilters = (params: IUrlParams) => {
  const filters = structuredClone(params);
  return {
    author: normaliseFilterData(filters.author),
    genre: normaliseFilterData(filters.genre),
    release_date: normaliseFilterData(filters.release_date),
    search: normaliseFilterData(filters.search),
  };
};

export const searchTrack = (tracks: Track[], searchQuery?: string) => {
  if (!searchQuery) return tracks;

  const searched = searchQuery.trim().toLocaleLowerCase();
  return tracks.filter((track) => {
    const matchName = track.name.toLowerCase().includes(searched);
    const matchAuthor = track.author.toLowerCase().includes(searched);
    const matchAlbum = track.album.toLowerCase().includes(searched);
    return matchName || matchAuthor || matchAlbum;
  });
};

export const toSorted =
  (sortVariant: 'ASC' | 'DESC') => (a: Track, b: Track) => {
    const dateA = new Date(b.release_date).getTime();
    const dateB = new Date(a.release_date).getTime();
    if (sortVariant === 'ASC') return dateA - dateB;
    if (sortVariant === 'DESC') return dateB - dateA;
    return 0;
  };

export const filterRules = (filterValues: string[], cb: FilterCB): boolean => {
  return !filterValues.length || filterValues.some(cb);
};

export const sortByReleaseDate = (tracks: Track[], sortVariant?: string) => {
  if (sortVariant === ReleaseDateVariants.ASC) tracks.sort(toSorted('ASC'));
  else if (sortVariant === ReleaseDateVariants.DESC)
    tracks.sort(toSorted('DESC'));

  return tracks;
};
