import { PayloadAction, WritableDraft } from '@reduxjs/toolkit';
import { trackSlice } from '../../types';

export const shuffleOn = (
  state: WritableDraft<trackSlice>,
  action: PayloadAction<boolean>,
) => {
  state.controls.shuffleOn = action.payload;
};

export const repeatOn = (
  state: WritableDraft<trackSlice>,
  action: PayloadAction<boolean>,
) => {
  state.controls.repeatOn = action.payload;
};

export const changeVolume = (
  state: WritableDraft<trackSlice>,
  action: PayloadAction<number>,
) => {
  state.controls.volume = action.payload;
};

export const mutedOn = (
  state: WritableDraft<trackSlice>,
  action: PayloadAction<boolean>,
) => {
  state.controls.muted = action.payload;
};
