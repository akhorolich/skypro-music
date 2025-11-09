'use client';
import Link from 'next/link';
import { cn } from '@/shared/lib';
import styles from './styles.module.css';

export default function SignIn() {
  return (
    <>
      <input
        className={cn(styles.modal__input, styles.login)}
        type="text"
        name="login"
        placeholder="Почта"
      />
      <input
        className={cn(styles.modal__input)}
        type="password"
        name="password"
        placeholder="Пароль"
      />
      <div className={styles.errorContainer}>{/*Блок для ошибок*/}</div>
      <button className={styles.modal__btnEnter}>Войти</button>
      <Link href={'/auth/signup'} className={styles.modal__btnSignup}>
        Зарегистрироваться
      </Link>
    </>
  );
}
