import type { ReactNode } from 'react';
import styles from './styles.module.css';
import open_filter_button from '@/shared/assets/icons/open_filter_button.svg';

interface Props {
  pageTitle?: string;
  children: ReactNode;
  onOpenFilter?: () => void;
}

export const PrimaryColumn = ({ pageTitle, children, onOpenFilter }: Props) => {
  return (
    <section className={styles.wrapper}>
      {pageTitle && (
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{pageTitle}</h1>
          {onOpenFilter && (
            <button className={styles.mobileFilterButton} onClick={onOpenFilter}>
              <img src={open_filter_button} alt="filter" />
            </button>
          )}
        </div>
      )}
      {children}
    </section>
  );
};
