'use client';
import { useActionState, useState } from 'react';
import Link from 'next/link';

import { signup } from '@/entities/auth/form-action';
import { cn } from '@/shared/lib';
import styles from './styles.module.css';
import { Input } from '@/shared/ui';

export default function SignUp() {
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
    username: '',
  });
  const [state, action, pending] = useActionState(signup, undefined);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form} action={action}>
            <div className={styles.modal__logo}>
              <img src={`${process.env.BASE_PATH}/logo_modal.png`} alt="logo" />
            </div>
            <Input
              className={cn(styles.modal__input)}
              type="text"
              name="email"
              placeholder={'Почта'}
              onChange={handleChange}
            />
            <Input
              className={cn(styles.modal__input)}
              type="text"
              name="username"
              placeholder={'Логин'}
              onChange={handleChange}
            />
            <Input
              className={cn(styles.modal__input)}
              type="password"
              name="password"
              placeholder={'Пароль'}
              onChange={handleChange}
            />
            <div className={styles.errorContainer}>
              <p className={styles.error_margin}>{state?.message}</p>
              <p className={styles.error_margin}>
                {state?.errors?.username ? state.errors.username : null}
              </p>
              <p className={styles.error_margin}>
                {state?.errors?.password ? state.errors.password : null}
              </p>
              <p className={styles.error_margin}>
                {state?.errors?.email ? state.errors.email : null}
              </p>
            </div>
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
