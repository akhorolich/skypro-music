import { PayloadAction, WritableDraft } from '@reduxjs/toolkit';
import { trackSlice } from '../../types';
import { Track } from '@/shared/model';

export const setTracks = (
  state: WritableDraft<trackSlice>,
  action: PayloadAction<Track[]>,
) => {
  state.tracks = action.payload;
  state.playback.currentPlaylist = action.payload;
};

export function setFavoriteTracks(
  state: WritableDraft<trackSlice>,
  action: PayloadAction<Track[]>,
) {
  state.playback.favorite = action.payload;
}

export function setLikeOnTrack(
  state: WritableDraft<trackSlice>,
  action: PayloadAction<Track>,
) {
  state.playback.favorite = [...state.playback.favorite, action.payload];
}

export function deleteLikeOnTrack(
  state: WritableDraft<trackSlice>,
  action: PayloadAction<Track>,
) {
  state.playback.favorite = [
    ...state.playback.favorite.filter(
      (track) => track._id !== action.payload._id,
    ),
  ];
}

export function setCurrentTrack(
  state: WritableDraft<trackSlice>,
  action: PayloadAction<Track | null>,
) {
  state.playback.currentTrack = action.payload;
}

export function setIsPlaying(
  state: WritableDraft<trackSlice>,
  action: PayloadAction<boolean>,
) {
  state.playback.isPlaying = action.payload;
}
