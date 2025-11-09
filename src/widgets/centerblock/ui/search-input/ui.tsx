import { Input } from '@/shared/ui';
import styles from './styles.module.css';

export function SearchInput() {
  return (
    <div className={styles.centerblock__search}>
      <svg className={styles.search__svg}>
        <use
          xlinkHref={`${process.env.BASE_PATH}/icon/sprite.svg#icon-search`}
        ></use>
      </svg>
      <Input
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
}
