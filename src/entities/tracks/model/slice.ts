import { createSlice, PayloadAction, WithSlice } from '@reduxjs/toolkit';
import { rootReducer } from '@/shared/redux';

import { MockData } from '@/shared/model';
import { data } from '@/shared/api';

import { currentTrack } from './types';

interface trackSlice {
  tracks: Array<MockData>;
  currentTrack: currentTrack;
  nextTrack: MockData | null;
  lastListenedTrack: MockData | null;
}

const initialState: trackSlice = {
  tracks: [],
  currentTrack: {
    value: null,
    isPlaying: false,
  },
  nextTrack: null,
  lastListenedTrack: null,
};

const slice = createSlice({
  name: 'tracks',
  initialState,
  selectors: {
    getTracks(state) {
      return state.tracks;
    },
    getCurrentTrack(state) {
      return state.currentTrack;
    },
  },
  reducers: {
    setTracks(state) {
      state.tracks = data;
    },
    setCurrentTrack(state, action: PayloadAction<MockData>) {
      state.currentTrack.value = action.payload;
    },
    setIsPlaying(state, action: PayloadAction<boolean>) {
      state.currentTrack.isPlaying = action.payload;
    },
  },
});

declare module '@/shared/redux/types' {
  export interface LazyLoaderSlices extends WithSlice<typeof slice> {}
}

export const tracksSlice = slice.injectInto(rootReducer);
