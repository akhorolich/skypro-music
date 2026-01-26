import type { AuthInitialState } from './types';

export const isAuth = (state: AuthInitialState) => {
  return state.isAuth;
};

export const username = (state: AuthInitialState) => {
  return state.username;
};
export const refresh = (state: AuthInitialState) => {
  return state.refresh;
};
export const access = (state: AuthInitialState) => {
  return state.access;
};
