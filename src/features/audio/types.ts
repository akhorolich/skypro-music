import { ActivePlayback, Controls } from '@/entities/tracks/model/types';
import { useAppDispatch } from '@/shared/lib';
import { Track } from '@/shared/model';

const dispatch = useAppDispatch();

export interface PlayerControlsHook {
  ref: React.RefObject<HTMLAudioElement | null>;
  tracks: Track[];
  playback: ActivePlayback;
  controls: Controls;
  emit: typeof dispatch;
}
