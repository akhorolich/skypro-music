import { cn } from '@/shared/lib';
import { forwardRef } from 'react';

import styles from './styles.module.css';

interface audioProps extends React.AudioHTMLAttributes<HTMLAudioElement> {
  className?: string;
}

export const AudioPlayer = forwardRef<HTMLAudioElement, audioProps>(
  ({ className, ...props }, ref) => (
    <audio
      className={cn(styles.hidden, className)}
      ref={ref}
      {...props}
    ></audio>
  ),
);
