'use client';
import { useActionState, useRef, useState } from 'react';
import Link from 'next/link';

import { cn } from '@/shared/lib';
import { signin } from '@/entities/auth/form-action';
import styles from './styles.module.css';
import { Input } from '@/shared/ui';

export default function SignIn() {
  const [formFields, setFormFields] = useState({ email: '', password: '' });
  const [state, action, pending] = useActionState(signin, undefined);

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
              <img src={`/logo_modal.png`} alt="logo" />
            </div>
            <Input
              className={cn(styles.modal__input, styles.login)}
              type="text"
              name="email"
              placeholder={'Почта'}
              value={formFields.email}
              onChange={handleChange}
            />
            <Input
              className={cn(styles.modal__input)}
              type="password"
              name="password"
              placeholder={'Пароль'}
              value={formFields.password}
              onChange={handleChange}
            />
            <div className={styles.errorContainer}>
              <p className={styles.error_margin}>{state?.message}</p>
              <p className={styles.error_margin}>
                {state?.errors?.password ? state.errors.password : null}
              </p>
              <p className={styles.error_margin}>
                {state?.errors?.email ? state.errors.email : null}
              </p>
            </div>
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
