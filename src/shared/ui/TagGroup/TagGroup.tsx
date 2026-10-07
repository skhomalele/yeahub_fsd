import { useState, type ReactNode } from 'react';
import styles from './styles.module.css';

interface TagGroupProps<T> {
  title: string;
  items: T[];
  children: (item: T) => ReactNode;
  limit?: number;
}

export const TagGroup = <T,>({ title, items, children, limit = 3 }: TagGroupProps<T>) => {
  const [isAllVisible, setIsAllVisible] = useState(false);

  if (!items || items.length === 0) return null;

  const visibleItems = isAllVisible ? items : items.slice(0, limit);
  const hasMore = items.length > limit;

  return (
    <div className={styles.tagGroup}>
      <p className={styles.title}>{title}</p>
      <div className={styles.category}>{visibleItems.map((item) => children(item))}</div>
      {hasMore && (
        <button onClick={() => setIsAllVisible(!isAllVisible)} className={styles.toggleContent}>
          {!isAllVisible ? 'Показать все' : 'Скрыть'}
        </button>
      )}
    </div>
  );
};
