import { logout } from '@/entities/auth/action';
import styles from './styles.module.css';

export function LogoutIcon() {
  return (
    <>
      <div className={styles.sidebar__icon} onClick={logout}>
        <svg>
          <use
            xlinkHref={`${process.env.BASE_PATH}/icon/sprite.svg#logout`}
          ></use>
        </svg>
      </div>
    </>
  );
}
