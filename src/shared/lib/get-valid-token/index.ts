import { refreshJwt } from '@/entities/auth';
import { getSession } from '@/entities/auth/lib';

export const getValidToken = async () => {
  const session = await getSession();
  if (!session?.access) return '';
  const token = await refreshJwt({ refresh: session.refresh });
  return token.access;
};
