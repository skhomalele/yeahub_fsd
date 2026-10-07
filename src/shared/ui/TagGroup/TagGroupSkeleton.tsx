import { TagSkeleton } from '../Tag/TagSkeleton';
import styles from './styles.module.css';

interface Props {
  tagsCount?: number;
}

export const TagGroupSkeleton = ({ tagsCount = 4 }: Props) => {
  const widths = [100, 75, 120, 90, 85];

  return (
    <div className={styles.tagGroup}>
      <div className={styles.category}>
        {Array.from({ length: tagsCount }).map((_, i) => (
          <TagSkeleton key={i} width={widths[i % widths.length]} />
        ))}
      </div>
    </div>
  );
};
