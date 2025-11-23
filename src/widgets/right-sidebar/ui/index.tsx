import { SidebarItem } from './sidebar-item/ui';
import { LogoutIcon } from './logout-icon/ui';

import styles from './styles.module.css';

export function Sidebar() {
  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personalName}>Sergey.Ivanov</p>
        <LogoutIcon />
      </div>
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          <SidebarItem
            hrefPath="/playlist/2"
            imgPath={`${process.env.BASE_PATH}/playlist01.png`}
            alt="Day's playlist"
          />
          <SidebarItem
            hrefPath="/playlist/3"
            imgPath={`${process.env.BASE_PATH}/playlist02.png`}
            alt="Day's playlist"
          />
          <SidebarItem
            hrefPath="/playlist/4"
            imgPath={`${process.env.BASE_PATH}/playlist03.png`}
            alt="Day's playlist"
          />
        </div>
      </div>
    </div>
  );
}
