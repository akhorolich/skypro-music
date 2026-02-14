import styles from './styles.module.css';

export function LogoutIcon({ logout }: { logout: () => void }) {
  return (
    <>
      <div className={styles.sidebar__icon} onClick={logout}>
        <svg>
          <use xlinkHref={`/icon/sprite.svg#logout`}></use>
        </svg>
      </div>
    </>
  );
}
