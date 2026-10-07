import styles from './styles.module.css';

export const QuestionNavSkeleton = () => {
  return (
    <div className={styles.questionNav}>
      <div className={`${styles.navItemSkeleton} ${styles.skeleton}`} />
      <div className={`${styles.navItemSkeleton} ${styles.skeleton}`} />
    </div>
  );
};
