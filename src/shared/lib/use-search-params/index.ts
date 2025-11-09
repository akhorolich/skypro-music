'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string | string[]) => {
      if (searchParams) {
        const params = new URLSearchParams(searchParams.toString());
        if (params.has('value')) params.delete('value');
        if (Array.isArray(value)) params.set(name, value.join(' '));
        if (typeof value === 'string') params.set(name, value);

        return params.toString();
      }
    },
    [searchParams],
  );

  return {
    push: (name: string, value: string | string[]) =>
      router.push(pathname + '?' + createQueryString(name, value)),
  };
}
