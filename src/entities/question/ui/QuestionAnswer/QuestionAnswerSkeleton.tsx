import styles from './styles.module.css';

interface Props {
  withCard?: boolean;
}

export const QuestionAnswerSkeleton = ({ withCard = true }: Props) => {
  return (
    <div className={withCard ? styles.card : ''}>
      <div className={`${styles.titleSkeleton} ${styles.skeleton}`} />
      <div className={`${styles.textSkeleton} ${styles.skeleton}`} style={{ width: '100%' }} />
      <div className={`${styles.textSkeleton} ${styles.skeleton}`} style={{ width: '90%' }} />
      <div className={`${styles.textSkeleton} ${styles.skeleton}`} style={{ width: '95%' }} />
      <div className={`${styles.textSkeleton} ${styles.skeleton}`} style={{ width: '60%' }} />
    </div>
  );
};
