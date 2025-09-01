import { ReactElement, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

type btnProps = {
  label: string;
  children: ReactElement;
};

export default function FilterBtn({ label, children }: btnProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!selectRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={selectRef}
      className={styles.filter__button}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {label}
      {isOpen && children}
    </div>
  );
}
