import { ReactElement, useRef } from 'react';
import styles from './styles.module.css';

type btnProps = {
  label: string;
  onClick?: () => void;
  children: ReactElement;
};

export default function FilterBtn({ label, children }: btnProps) {
  const selectRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={selectRef}
      className={styles.filter__button}
      onClick={() => console.log(selectRef.current)}
    >
      {label}
      {children}
    </div>
  );
}
