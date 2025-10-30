import { tracksSlice } from './model/slice';

export const trackActions = tracksSlice.actions;
export const trackSelectors = tracksSlice.selectors;

export {
  initQueue,
  switchTrack,
  shuffleTracks,
  getFirstInQueue,
  queueList,
  shuffleQueue,
} from './model/queue';
