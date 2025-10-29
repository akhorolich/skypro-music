import styles from './styles.module.css';

export default function Burger() {
  return (
    <div className={styles.nav__burger}>
      <span className={styles.burger__line}></span>
      <span className={styles.burger__line}></span>
      <span className={styles.burger__line}></span>
    </div>
  );
}
