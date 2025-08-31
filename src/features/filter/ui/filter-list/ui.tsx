import { cn } from '@/shared/lib';
import styles from './styles.module.css';

type filterListProps = { options: string[]; className?: string };

export default function FilterList({ options, className }: filterListProps) {
  return (
    <div className={cn(styles.filter__block)}>
      <ul className={styles.filter__list}>
        {options.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
