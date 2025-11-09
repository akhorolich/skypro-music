'use client';
import { cn } from '@/shared/lib';
import styles from './styles.module.css';
import Link from 'next/link';

export default function SignUp() {
  return (
    <>
      <input
        className={cn(styles.modal__input)}
        type="text"
        name="login"
        placeholder="Почта"
      />
      <input
        className={styles.modal__input}
        type="password"
        name="password"
        placeholder="Пароль"
      />
      <input
        className={styles.modal__input}
        type="password"
        name="password"
        placeholder="Повторите пароль"
      />
      <div className={styles.errorContainer}></div>
      <button className={styles.modal__btnSignupEnt}>Зарегистрироваться</button>
      <Link href={'/auth/signin'} className={styles['modal__back-to']}>
        Вернуться на страницу входа
      </Link>
    </>
  );
}
