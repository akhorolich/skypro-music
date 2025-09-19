import styles from './styles.module.css';

export function SearchInput() {
  return (
    <div className={styles.centerblock__search}>
      <svg className={styles.search__svg}>
        <use xlinkHref="/icon/sprite.svg#icon-search"></use>
      </svg>
      // move to shared
      <input
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
}
