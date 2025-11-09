'use client';

import { ReactElement, useRef, useState } from 'react';

import { cn, useClickOutside } from '@/shared/lib';

import styles from './styles.module.css';

type btnProps = {
  label: string;
  searchParam: string;
  children: ReactElement;
};

export default function FilterBtn({ label, searchParam, children }: btnProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useClickOutside(selectRef, setIsOpen);

  const handleClick = () => {
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
