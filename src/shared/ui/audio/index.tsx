import { forwardRef } from 'react';

interface audioProps extends React.AudioHTMLAttributes<HTMLAudioElement> {
  className?: string;
}

export const AudioPlayer = forwardRef<HTMLAudioElement, audioProps>(
  ({ className, ...props }, ref) => (
    <audio className={className} ref={ref} {...props}></audio>
  ),
);
