import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { updateQueryValuesFilter } from './updateQueryValuesFilter';
import { QueryParams } from '../../types';

export const useFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searcParams = useSearchParams();

  const createQuery = (query: QueryParams, value: string) => {
    const url = new URLSearchParams(searcParams.toString());
    const param = url.get(query);
    const currentFilterValues: string[] = param ? param.split(' ') : [];
    const queryString = updateQueryValuesFilter(
      query,
      value,
      currentFilterValues,
      {
        release_date: true,
      },
    );

    if (queryString.length === 0) url.delete(query);
    else url.set(query, queryString.join(' '));
    return url.toString();
  };

  const addCategory = (queryName: QueryParams, queryValue: string) => {
    const params = createQuery(queryName, queryValue);
    return router.push(pathname + '?' + params);
  };
  return addCategory;
};
