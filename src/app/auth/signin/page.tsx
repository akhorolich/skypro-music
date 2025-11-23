'use client';
import Link from 'next/link';

import { cn } from '@/shared/lib';
import { signin } from '@/entities/auth/action';
import { useActionState } from 'react';
import styles from './styles.module.css';

export default function SignIn() {
  const [state, action, pending] = useActionState(signin, undefined);

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form} action={action}>
            <div className={styles.modal__logo}>
              <img src={`${process.env.BASE_PATH}/logo_modal.png`} alt="logo" />
            </div>
            <input
              className={cn(styles.modal__input, styles.login)}
              name="email"
              placeholder={
                state?.errors?.email ? state.errors.email[0] : 'Почта'
              }
            />
            <input
              className={styles.modal__input}
              type="password"
              name="password"
              placeholder={
                state?.errors?.password ? state.errors.password[0] : 'Пароль'
              }
            />
            <button className={styles.modal__btnEnter} disabled={pending}>
              Войти
            </button>
            <Link href={'/auth/signup'} className={styles.modal__btnSignup}>
              Зарегистрироваться
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
