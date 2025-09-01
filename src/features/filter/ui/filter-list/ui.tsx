import styles from './styles.module.css';

type filterListProps = {
  options: string[];
};

export default function FilterList({ options }: filterListProps) {
  return (
    <div className={styles.filter__block}>
      <ul className={styles.filter__list}>
        {options.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
