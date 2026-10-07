import styles from './styles.module.css';

export const QuestionCardSkeleton = () => {
  return (
    <article className={styles.card}>
      <div className={styles.titleSkeleton} />
      <div className={styles.cardContent}>
        <div className={styles.bodyInner}>
          <div className={styles.metaRow}>
            <div className={styles.metaSkeleton} />
            <div className={styles.buttonSkeleton} />
          </div>
          <div className={styles.answerSkeleton} />
        </div>
      </div>
    </article>
  );
};
