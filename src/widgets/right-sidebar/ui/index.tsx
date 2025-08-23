import SidebarItem from './sidebar-item/ui';
import LogoutIcon from './logout-icon/ui';

import styles from './styles.module.css';

export default function Sidebar() {
  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personalName}>Sergey.Ivanov</p>
        <LogoutIcon />
      </div>
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          <SidebarItem
            hrefPath="#"
            imgPath="/playlist01.png"
            alt="Day's playlist"
          />
          <SidebarItem
            hrefPath="#"
            imgPath="/playlist02.png"
            alt="Day's playlist"
          />
          <SidebarItem
            hrefPath="#"
            imgPath="/playlist03.png"
            alt="Day's playlist"
          />
        </div>
      </div>
    </div>
  );
}
