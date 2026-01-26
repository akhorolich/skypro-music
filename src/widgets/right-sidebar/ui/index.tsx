import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { authorizationActions, authorizationSelectors } from '@/entities/auth';
import { removeSession } from '@/entities/auth/form-action';

import { SidebarItem } from './sidebar-item/ui';
import { LogoutIcon } from './logout-icon/ui';
import styles from './styles.module.css';
import { trackActions } from '@/entities/tracks';

export function Sidebar() {
  const login = useAppSelector(authorizationSelectors.username);
  const dispatch = useAppDispatch();

  const logout = () => {
    if (!login) return;
    dispatch(authorizationActions.setUsername(''));
    dispatch(authorizationActions.setAuthToken({ access: '', refresh: '' }));
    dispatch(authorizationActions.setIsAuth(false));
    dispatch(trackActions.setFavoriteTracks([]));
    removeSession();
  };
  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personalName}>{login || 'Аноним'}</p>
        <LogoutIcon logout={logout} />
      </div>
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          <SidebarItem
            hrefPath="/2"
            imgPath={`${process.env.BASE_PATH}/playlist01.png`}
            alt="Day's playlist"
          />
          <SidebarItem
            hrefPath="/3"
            imgPath={`${process.env.BASE_PATH}/playlist02.png`}
            alt="Day's playlist"
          />
          <SidebarItem
            hrefPath="/4"
            imgPath={`${process.env.BASE_PATH}/playlist03.png`}
            alt="Day's playlist"
          />
        </div>
      </div>
    </div>
  );
}
