import Link from 'next/link';

import { Burger } from './burger/ui';
import { Logo } from './logo/ui';

import styles from './styles.module.css';

export function Navigation() {
  return (
    <nav className={styles.main__nav}>
      <Logo />
      <Burger>
        <div className={styles.nav__menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link href="#" className={styles.menu__link}>
                Главное
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link href="#" className={styles.menu__link}>
                Мой плейлист
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link href="../signin.html" className={styles.menu__link}>
                Войти
              </Link>
            </li>
          </ul>
        </div>
      </Burger>
    </nav>
  );
}
