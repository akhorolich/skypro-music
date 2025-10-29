import { trackSlice } from '../types';

export const getTracks = (state: trackSlice) => {
  return state.tracks;
};

export const getPlayback = (state: trackSlice) => {
  return state.playback;
};

export const getControls = (state: trackSlice) => {
  return state.controls;
};
