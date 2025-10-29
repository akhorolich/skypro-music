import { PayloadAction, WritableDraft } from '@reduxjs/toolkit';
import { trackSlice } from '../../types';
import { MockData } from '@/shared/model';

export const setTracks = (
  state: WritableDraft<trackSlice>,
  action: PayloadAction<MockData[]>,
) => {
  state.tracks = action.payload;
  state.playback.currentPlaylist = action.payload;
};

export function setCurrentTrack(
  state: WritableDraft<trackSlice>,
  action: PayloadAction<MockData | null>,
) {
  state.playback.currentTrack = action.payload;
}

export function setIsPlaying(
  state: WritableDraft<trackSlice>,
  action: PayloadAction<boolean>,
) {
  state.playback.isPlaying = action.payload;
}
