import { setIsPlaying } from '@/entities/tracks';
import { useAppDispatch } from '@/shared/lib/redux-select-dispatch';
import { useCallback, useEffect } from 'react';

export function usePlayerControls(
  audioRef: React.RefObject<HTMLAudioElement | null>,
) {
  const dispatch = useAppDispatch();

  const onPlay = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    el.play().then(() => dispatch(setIsPlaying(true)));
  }, [dispatch]);

  const onPause = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    el.pause();
    dispatch(setIsPlaying(false));
  }, [dispatch]);

  const onToogle = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    el.paused ? onPlay() : onPause();
  }, [onPlay, onPause]);

  const onEnded = useCallback(() => {
    dispatch(setIsPlaying(false));
  }, [dispatch]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    el.addEventListener('playing', onPlay);
    el.addEventListener('ended', onEnded);
    return () => {
      el.removeEventListener('playing', onPlay);
      el.removeEventListener('ended', onEnded);
    };
  }, [onEnded]);

  return { play: onPlay, pause: onPause, toggle: onToogle };
}
