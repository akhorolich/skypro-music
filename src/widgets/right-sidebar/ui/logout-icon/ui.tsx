import styles from './styles.module.css';

export function LogoutIcon() {
  return (
    <>
      <div className={styles.sidebar__icon}>
        <svg>
          <use
            xlinkHref={`${process.env.BASE_PATH}/icon/sprite.svg#logout`}
          ></use>
        </svg>
      </div>
    </>
  );
}
