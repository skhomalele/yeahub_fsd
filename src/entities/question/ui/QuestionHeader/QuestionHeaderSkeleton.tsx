import styles from './styles.module.css';

export const QuestionHeaderSkeleton = () => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={`${styles.img} ${styles.skeleton}`} />
      </div>
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <div className={`${styles.titleSkeleton} ${styles.skeleton}`} />
        </div>
        <div className={`${styles.descSkeleton} ${styles.skeleton}`} />
        <div className={`${styles.descSkeleton} ${styles.skeleton}`} style={{ width: '80%' }} />
        <div className={`${styles.descSkeleton} ${styles.skeleton}`} style={{ width: '60%' }} />
      </div>
    </article>
  );
};
