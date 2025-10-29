import styles from './styles.module.css';

type BurgerProps = { children: React.ReactNode };

export function Burger({ children }: BurgerProps) {
  return (
    <details className={styles.burger__details}>
      <summary className={styles.nav__burger}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </summary>
      {children}
    </details>
  );
}
