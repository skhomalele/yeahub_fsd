import styles from './styles.module.css';

interface Props {
  stats: number;
  title: string;
}

export const Stats = ({ stats, title }: Props) => {
  if (stats === undefined || stats === null) return null;

  return (
    <div className={styles.rate}>
      <p className={styles.stat}>{title}:</p>
      <p className={styles.value}>{stats}</p>
    </div>
  );
};
