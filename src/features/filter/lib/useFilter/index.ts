import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { updateQueryValuesFilter } from './updateQueryValuesFilter';
import { FilterParams } from '../../types';
import { useEffect, useState } from 'react';

export const useFilter = () => {
  const [isFiltered, setIsFiltred] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searcParams = useSearchParams();

  useEffect(() => {
    setIsFiltred(() => searcParams.entries().some((value) => value));
  }, [searcParams]);

  const createQuery = (query: FilterParams, value: string) => {
    const url = new URLSearchParams(searcParams.toString());
    const param = url.get(query);
    const currentFilterValues: string[] = param ? param.split(' ') : [];
    const queryString = updateQueryValuesFilter(
      query,
      value,
      currentFilterValues,
      {
        release_date: true,
        search: true,
      },
    );

    if (queryString.length === 0) url.delete(query);
    else url.set(query, queryString.join(' '));
    return url.toString();
  };

  const addCategory = (queryName: FilterParams, queryValue: string) => {
    const params = createQuery(queryName, queryValue);
    return router.push(pathname + '?' + params);
  };

  return { filter: addCategory, isFiltered };
};
