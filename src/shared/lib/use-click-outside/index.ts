import { useEffect } from 'react';

export function useClickOutside(
  selectRef: React.RefObject<HTMLDivElement | null>,
  setter: (next: boolean) => void,
) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!selectRef.current?.contains(target)) {
        setter(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
}
