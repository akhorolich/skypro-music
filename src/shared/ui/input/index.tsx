import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/shared/lib';

import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(styles['ps__text'], className)}
        {...props}
      />
    );
  },
);
