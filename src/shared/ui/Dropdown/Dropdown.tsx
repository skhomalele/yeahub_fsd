import React, { useEffect, useRef, useState } from 'react';

import styles from './styles.module.css';

interface Props {
  title?: string;
  children?: React.ReactNode;
  img: string;
  transform: boolean;
  position: 'left' | 'right';
}

export const Dropdown = ({ title, children, img, transform, position }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.wrapper} ref={menuRef}>
      <div className={styles.dropdownCollapsed} onClick={() => setIsOpen(!isOpen)}>
        {title && <p>{title}</p>}
        <img
          className={transform && isOpen ? styles.iconOpen : ''}
          src={img}
          alt="dropdown button"
        />
      </div>
      {isOpen && <div className={`${styles.dropdown} ${styles[position]}`}>{children}</div>}
    </div>
  );
};
