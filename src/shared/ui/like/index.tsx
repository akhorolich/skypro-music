'use client';
import { cn } from '@/shared/lib';
import styles from './styles.module.css';

type likeProps = {
  className?: string;
  isLiked: boolean;
  isAuth?: boolean;
  onClick?: () => void;
};

export function Like({
  className = '',
  isLiked = false,
  isAuth,
  onClick,
}: likeProps) {
  return (
    <svg
      className={cn(styles.trackPlay__likeSvg, className, {
        [styles.liked]: isLiked,
      })}
      onClick={onClick}
    >
      <use
        xlinkHref={`${process.env.BASE_PATH}/icon/sprite.svg#icon-${isAuth ? 'like' : 'dislike'}`}
      ></use>
    </svg>
  );
}
