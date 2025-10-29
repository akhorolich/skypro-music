import { createSlice, WithSlice } from '@reduxjs/toolkit';
import { rootReducer } from '@/shared/redux';

import { trackSlice } from './types';
import { getControls, getPlayback, getTracks } from './selectors';
import {
  shuffleOn,
  repeatOn,
  changeVolume,
  mutedOn,
} from './actions/controls-actions';
import {
  setTracks,
  setCurrentTrack,
  setIsPlaying,
} from './actions/playback-actions';

const initialState: trackSlice = {
  tracks: [],
  playback: {
    isPlaying: false,
    currentPlaylist: [],
    currentTrack: null,
    duration: 0,
  },
  controls: {
    volume: 0.5,
    shuffleOn: false,
    repeatOn: false,
    muted: false,
  },
};

const slice = createSlice({
  name: 'tracks',
  initialState,
  selectors: {
    getControls,
    getPlayback,
    getTracks,
  },
  reducers: {
    setTracks,
    setCurrentTrack,
    setIsPlaying,
    shuffleOn,
    repeatOn,
    changeVolume,
    mutedOn,
  },
});

declare module '@/shared/redux/types' {
  export interface LazyLoaderSlices extends WithSlice<typeof slice> {}
}

export const tracksSlice = slice.injectInto(rootReducer);
