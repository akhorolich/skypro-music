import { cn } from '@/shared/lib';

import styles from './styles.module.css';

type likeProps = {
  className?: string;
  isLiked: boolean;
  onClick?: () => void;
};

export function Like({ className = '', isLiked, onClick }: likeProps) {
  return (
    <svg
      className={cn(styles.trackPlay__likeSvg, className, {
        [styles.liked]: isLiked,
      })}
      onClick={onClick}
    >
      <use
        xlinkHref={`${process.env.BASE_PATH}/icon/sprite.svg#icon-${isLiked ? 'like' : 'dislike'}`}
      ></use>
    </svg>
  );
}
