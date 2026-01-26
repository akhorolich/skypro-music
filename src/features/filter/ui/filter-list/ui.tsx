import { useFilter } from '../../lib/useFilter';
import { QueryParams } from '../../types';
import styles from './styles.module.css';

type filterListProps = {
  options: string[];
  searchParam: QueryParams;
};

export default function FilterList({ options, searchParam }: filterListProps) {
  const { filter } = useFilter();

  const stopBubbling = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.stopPropagation();

  const addCategory = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const query: string = e.currentTarget.textContent.split(' ').join('%');
    filter(searchParam, query);
  };

  return (
    <div className={styles.filter__block} onClick={stopBubbling}>
      <ul className={styles.filter__list}>
        {options.map((el, index) => (
          <li key={index} onClick={addCategory}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
