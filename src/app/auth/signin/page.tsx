'use client';
import { useActionState, useRef, useState } from 'react';
import Link from 'next/link';

import { cn } from '@/shared/lib';
import { signin } from '@/entities/auth/action';
import styles from './styles.module.css';

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
              <img src={`${process.env.BASE_PATH}/logo_modal.png`} alt="logo" />
            </div>
            <input
              className={cn(styles.modal__input, styles.login)}
              name="email"
              placeholder={'Почта'}
              value={formFields.email}
              onChange={handleChange}
            />
            <input
              className={cn(styles.modal__input)}
              type="password"
              name="password"
              placeholder={'Пароль'}
              value={formFields.password}
              onChange={handleChange}
            />
            <div className={styles.errorContainer}>
              <p style={{ margin: '0' }}>{state?.message}</p>
              <p style={{ margin: '0' }}>
                {state?.errors?.password ? state.errors.password : null}
              </p>
              <p style={{ margin: '0' }}>
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
