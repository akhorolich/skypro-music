import { cn } from '@/shared/lib';
import { Dislike, Like } from '@/shared/ui';

import styles from './styles.module.css';

export function LikeOrDislike() {
  return (
    <>
      <div className={styles.trackPlay__likeDis}>
        <div className={cn(styles.trackPlay__like, 'btnIcon')}>
          <Like />
        </div>
        <div className={cn(styles.trackPlay__dislike, 'btnIcon')}>
          <Dislike />
        </div>
      </div>
    </>
  );
}
