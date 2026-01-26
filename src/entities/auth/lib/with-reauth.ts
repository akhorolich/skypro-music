import { AxiosError } from 'axios';
import { refreshJwt } from '../api';
import type { AppDispatch } from '@/shared/redux';
import { authorizationActions } from '..';

export const withReAuth = async <T>(
  apiFunction: (access: string) => Promise<T>,
  refresh: string,
  dispatch: AppDispatch,
): Promise<T> => {
  try {
    return await apiFunction('');
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response?.status === 401) {
      try {
        const newAccessToken = await refreshJwt({
          refresh,
        });
        dispatch(
          authorizationActions.setAuthToken({
            access: newAccessToken.access,
            refresh: refresh,
          }),
        );
        return await apiFunction(newAccessToken.access);
      } catch (refreshError) {
        throw refreshError;
      }
    }
    throw error;
  }
};
