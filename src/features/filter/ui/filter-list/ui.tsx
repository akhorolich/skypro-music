import styles from './styles.module.css';

type filterListProps = {
  options: string[];
  pushSearchParams: (
    name: string,
    value: string | string[],
  ) => Promise<boolean>;
};

export default function FilterList({
  options,
  pushSearchParams,
}: filterListProps) {
  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();
    const target = e.currentTarget.textContent;
    if (target) pushSearchParams('value', [target, '3', '4', '5']);
  };
  return (
    <div className={styles.filter__block}>
      <ul className={styles.filter__list}>
        {options.map((el, index) => (
          <li key={index} onClick={handleClick}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
