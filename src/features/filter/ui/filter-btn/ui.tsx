import { ReactElement, useRef, useState } from 'react';

import { cn, useClickOutside } from '@/shared/lib';

import styles from './styles.module.css';

type btnProps = {
  label: string;
  pushSearchParams: (
    name: string,
    value: string | string[],
  ) => Promise<boolean>;
  searchParam: string;
  children: ReactElement;
};

export default function FilterBtn({
  label,
  pushSearchParams,
  searchParam,
  children,
}: btnProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useClickOutside(selectRef, setIsOpen);

  const handleClick = () => {
    pushSearchParams('sort', searchParam);
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      ref={selectRef}
      className={cn(styles.filter__button, { [styles.open]: isOpen })}
      onClick={handleClick}
    >
      {label}
      {isOpen && children}
    </div>
  );
}
