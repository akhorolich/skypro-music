import { cn } from '@/shared/lib';

import styles from './styles.module.css';

type dislikeProps = {
  className?: string;
};

export function Dislike({ className = '' }: dislikeProps) {
  return (
    <svg className={cn(styles.trackPlay__dislikeSvg, className)}>
      <use xlinkHref="/icon/sprite.svg#icon-dislike"></use>
    </svg>
  );
}
