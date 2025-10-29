import Image from 'next/image';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.nav__logo}>
      <Image
        width={250}
        height={170}
        className={styles.logo__image}
        src="/logo.png"
        alt={'logo'}
      />
    </div>
  );
}
