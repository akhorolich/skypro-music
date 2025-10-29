import { tracksSlice } from './model/slice';

export const { setCurrentTrack, setTracks, setIsPlaying } = tracksSlice.actions;
export const { getTracks, getCurrentTrack } = tracksSlice.selectors;
