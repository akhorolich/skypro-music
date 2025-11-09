import { cn } from '@/shared/lib';

import styles from './styles.module.css';

type likeProps = {
  className?: string;
};

export function Like({ className = '' }: likeProps) {
  return (
    <svg className={cn(styles.trackPlay__likeSvg, className)}>
      <use
        xlinkHref={`${process.env.BASE_PATH}/icon/sprite.svg#icon-like`}
      ></use>
    </svg>
  );
}
