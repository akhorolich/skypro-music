import Link from 'next/link';

import { Burger } from './burger/ui';
import { Logo } from './logo/ui';

import styles from './styles.module.css';
import { useAppSelector } from '@/shared/lib';
import { authorizationSelectors } from '@/entities/auth';

export function Navigation() {
  const isAuth = useAppSelector(authorizationSelectors.isAuth);
  return (
    <nav className={styles.main__nav}>
      <Logo />
      <Burger>
        <div className={styles.nav__menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link href="/" className={styles.menu__link}>
                На главную
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link href="/favorites" className={styles.menu__link}>
                Мой плейлист
              </Link>
            </li>
            <li className={styles.menu__item} hidden={isAuth}>
              <Link href="/auth/signin" className={styles.menu__link}>
                Войти
              </Link>
            </li>
          </ul>
        </div>
      </Burger>
    </nav>
  );
}
