import { Track } from '@/shared/model';
import { useSearchParams } from 'next/navigation';
import * as filterUtils from './filterUtils';

export const useUrlFilters = (tracks: Track[]) => {
  const serachParams = useSearchParams();
  const currentTracks = tracks.slice();

  const deletePercentChar = (filterParamData: string) =>
    filterParamData.split('%').join(' ');

  const normaliseFilterData = (paramKeyData?: string) => {
    if (!paramKeyData) return [];
    return paramKeyData.split(' ').map(deletePercentChar);
  };

  const getFilters = (params: IUrlParams) => {
    const filters = structuredClone(params);
    return {
      author: normaliseFilterData(filters.author),
      genre: normaliseFilterData(filters.genre),
      release_date: normaliseFilterData(filters.release_date),
      search: normaliseFilterData(filters.search),
    };
  };
  const params: IUrlParams = Object.fromEntries(serachParams.entries());

  const filteredTracks = () => {
    const filters = getFilters(params);
    const searchQuery = filters.search[0];
    const releaseQuery = filters.release_date[0];
    const filtredByRules = currentTracks.filter((track) => {
      const rules = {
        author: () =>
          !filters.author.length || filters.author.includes(track.author),
        genre: () =>
          !filters.genre.length ||
          track.genre.some((genre) => filters.genre.includes(genre)),
      };

      return Object.values(rules).every((check) => check());
    });

    const sortBySearchParam = filterUtils.searchTrack(
      filtredByRules,
      searchQuery,
    );

    const sortByRelease = filterUtils.sortByReleaseDate(
      sortBySearchParam,
      releaseQuery,
    );

    return sortByRelease;
  };

  return {
    tracksWithFilters: filteredTracks(),
    filterByReleaseOn: params.release_date,
  };
};
