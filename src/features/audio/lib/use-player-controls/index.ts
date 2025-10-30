import { InputEvent, useCallback, useEffect, useState } from 'react';

import type { PlayerControlsHook } from '../../types';

import {
  trackActions,
  switchTrack,
  shuffleTracks,
  getFirstInQueue,
  queueList,
  shuffleQueue,
} from '@/entities/tracks';
import { withAudio } from '../with-audio';

const DEFAULT_VOLUME = 0.5;

export function usePlayerControls(config: PlayerControlsHook) {
  const [progress, setProgress] = useState(0);
  const { emit, controls, playback, tracks } = config;
  const withAudioPlayer = withAudio(config.ref);

  const onPlay = useCallback(
    () =>
      withAudioPlayer((player) => {
        player
          .play()
          .then(() => {
            emit(trackActions.setIsPlaying(true));
          })
          .catch((error) => error);
      }),
    [emit, withAudioPlayer],
  );

  const onPause = useCallback(
    () =>
      withAudioPlayer((player) => {
        player.pause();
        emit(trackActions.setIsPlaying(false));
      }),
    [emit, withAudioPlayer],
  );

  const onToggle = useCallback(
    () =>
      withAudioPlayer((player) => {
        if (!playback.currentTrack) {
          const queue = controls.shuffleOn ? shuffleQueue : queueList;
          const firstTrack = getFirstInQueue(queue);
          emit(trackActions.setCurrentTrack(firstTrack));
        }
        player.paused ? onPlay() : onPause();
      }),
    [
      onPlay,
      onPause,
      withAudioPlayer,
      playback.currentTrack,
      controls.shuffleOn,
    ],
  );

  const onShuffle = () => {
    if (!controls.shuffleOn) {
      playback.currentTrack
        ? shuffleTracks(shuffleQueue, tracks, playback.currentTrack)
        : shuffleTracks(shuffleQueue, tracks);
    }
    emit(trackActions.shuffleOn(!controls.shuffleOn));
  };

  const onRepeat = () => emit(trackActions.repeatOn(!controls.repeatOn));

  const onNext = () => {
    const queue = controls.shuffleOn ? shuffleQueue : queueList;
    const current = playback.currentTrack;
    let nextTrack;
    if (current) nextTrack = switchTrack(queue, current._id, 'next');
    if (nextTrack) emit(trackActions.setCurrentTrack(nextTrack));
  };

  const onPrev = () => {
    const queue = controls.shuffleOn ? shuffleQueue : queueList;
    const current = playback.currentTrack;
    let prevTrack;
    if (current) prevTrack = switchTrack(queue, current._id, 'prev');
    if (prevTrack) emit(trackActions.setCurrentTrack(prevTrack));
  };

  const onEnded = useCallback(() => {
    const last = controls.shuffleOn ? shuffleQueue.barrier : queueList.barrier;
    const current = playback.currentTrack;
    if (current === last.prev?.data) {
      emit(trackActions.setIsPlaying(false));
      emit(trackActions.setCurrentTrack(null));
    } else {
      onNext();
    }
  }, [emit, onNext]);

  const onMuted = () =>
    withAudioPlayer((player) => {
      if (!controls.muted) {
        player.volume = 0;
        emit(trackActions.changeVolume(0));
      }
      if (controls.muted && player.volume === 0) {
        player.volume = DEFAULT_VOLUME;
        emit(trackActions.changeVolume(DEFAULT_VOLUME));
      }
      emit(trackActions.mutedOn(!controls.muted));
    });

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) =>
    withAudioPlayer((player) => {
      const value = Number(e.target.value);
      player.volume = value;
      emit(trackActions.changeVolume(value));
      value === 0
        ? emit(trackActions.mutedOn(true))
        : emit(trackActions.mutedOn(false));
    });

  const onProgress = () =>
    withAudioPlayer((player) => {
      const currentTime = player.currentTime;
      const trackDuration = player.duration;
      const trackPlayed = (currentTime / trackDuration) * 100;
      setProgress(trackPlayed);
    });

  const rewindTrack = (e: React.ChangeEvent<HTMLInputElement>) =>
    withAudioPlayer((player) => {
      const currentTime = Number(e.target.value);
      const trackDuration = player.duration;
      const rewind = (currentTime / 100) * trackDuration;
      player.currentTime = rewind;
    });

  useEffect(() => {
    withAudioPlayer((player) => {
      player.addEventListener('playing', onPlay);
      player.addEventListener('ended', onEnded);
      player.addEventListener('timeupdate', onProgress);
      return () => {
        player.removeEventListener('playing', onPlay);
        player.removeEventListener('ended', onEnded);
        player.removeEventListener('timeupdate', onProgress);
      };
    });
  }, [onPlay, onEnded, withAudioPlayer]);

  return {
    play: onPlay,
    pause: onPause,
    toggle: onToggle,
    shuffle: onShuffle,
    repeat: onRepeat,
    next: onNext,
    prev: onPrev,
    muted: onMuted,
    changeVolume,
    rewindTrack,
    progress,
  };
}
