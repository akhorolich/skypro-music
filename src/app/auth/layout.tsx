'use client';
import styles from './styles.module.css';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form}>
            <div className={styles.modal__logo}>
              <img src={`${process.env.BASE_PATH}/logo_modal.png`} alt="logo" />
            </div>
            {children}
          </form>
        </div>
      </div>
    </div>
  );
}
