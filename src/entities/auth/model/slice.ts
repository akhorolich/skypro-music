import { rootReducer } from '@/shared/redux';
import { createSlice, WithSlice } from '@reduxjs/toolkit';
import type { AuthInitialState } from './types';
import { setAuthToken, setUsername, setIsAuth } from './actions';
import { isAuth, refresh, access, username } from './selectors';

const initialState: AuthInitialState = {
  username: '',
  access: '',
  refresh: '',
  isAuth: false,
};

const slice = createSlice({
  name: 'authorization',
  initialState,
  selectors: {
    isAuth,
    refresh,
    access,
    username,
  },
  reducers: {
    setUsername,
    setAuthToken,
    setIsAuth,
  },
});

declare module '@/shared/redux/types' {
  export interface LazyLoaderSlices extends WithSlice<typeof slice> {}
}

export const authorizationSlice = slice.injectInto(rootReducer);
