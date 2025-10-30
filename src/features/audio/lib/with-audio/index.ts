export const withAudio =
  (ref: React.RefObject<HTMLAudioElement | null>) =>
  (handler: (player: HTMLAudioElement) => void) => {
    const el = ref.current;
    if (el) handler(el);
  };
