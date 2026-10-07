import styles from './styles.module.css';

interface Props {
  width?: number | string;
}

export const TagSkeleton = ({ width = 80 }: Props) => {
  return (
    <div className={`${styles.tag} ${styles.skeleton}`} style={{ width }}>
      &nbsp;
    </div>
  );
};
