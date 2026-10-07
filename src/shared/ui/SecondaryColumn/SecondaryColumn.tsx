import type { ReactNode } from 'react';
import styles from './styles.module.css';

interface Props {
  children: ReactNode;
}

export const SecondaryColumn = ({ children }: Props) => {
  return <aside className={styles.sidebar}>{children}</aside>;
};
