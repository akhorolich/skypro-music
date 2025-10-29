import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

interface SidebarProps {
  hrefPath: string;
  imgPath: string;
  alt: string;
}

export function SidebarItem({ hrefPath, imgPath, alt }: SidebarProps) {
  return (
    <div className={styles.sidebar__item}>
      <Link className={styles.sidebar__link} href={hrefPath}>
        <Image
          className={styles.sidebar__img}
          src={imgPath}
          alt={alt}
          width={250}
          height={170}
        />
      </Link>
    </div>
  );
}
