'use client';
import { useActionState } from 'react';
import Link from 'next/link';

import { signup } from '@/entities/auth/action';
import { cn } from '@/shared/lib';
import styles from './styles.module.css';

export default function SignUp() {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form} action={action}>
            <div className={styles.modal__logo}>
              <img src={`${process.env.BASE_PATH}/logo_modal.png`} alt="logo" />
            </div>
            <input
              className={cn(styles.modal__input, {
                [styles['error']]: state?.errors?.email ? true : false,
              })}
              name="email"
              placeholder={
                state?.errors?.email ? state.errors.email[0] : 'Почта'
              }
            />
            <input
              className={cn(styles.modal__input, {
                [styles['error']]: state?.errors?.username ? true : false,
              })}
              type="text"
              name="username"
              placeholder={
                state?.errors?.username ? state.errors.username[0] : 'Логин'
              }
            />
            <input
              className={cn(styles.modal__input, {
                [styles['error']]: state?.errors?.password ? true : false,
              })}
              type="password"
              name="password"
              placeholder={
                state?.errors?.password ? state.errors.password[0] : 'Пароль'
              }
            />
            <div className={styles.errorContainer}>{state?.message}</div>
            <button className={styles.modal__btnSignupEnt} disabled={pending}>
              Зарегистрироваться
            </button>
            <Link href={'/auth/signin'} className={styles['modal__back-to']}>
              Вернуться на страницу входа
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
