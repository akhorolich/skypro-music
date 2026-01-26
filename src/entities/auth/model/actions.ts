import { PayloadAction, WritableDraft } from '@reduxjs/toolkit';
import { AuthInitialState } from './types';

export const setUsername = (
  state: WritableDraft<AuthInitialState>,
  action: PayloadAction<string>,
) => {
  state.username = action.payload;
};

export const setAuthToken = (
  state: WritableDraft<AuthInitialState>,
  action: PayloadAction<{ access: string; refresh: string }>,
) => {
  state.access = action.payload.access;
  state.refresh = action.payload.refresh;
};

export const setIsAuth = (
  state: WritableDraft<AuthInitialState>,
  action: PayloadAction<boolean>,
) => {
  state.isAuth = action.payload;
};
