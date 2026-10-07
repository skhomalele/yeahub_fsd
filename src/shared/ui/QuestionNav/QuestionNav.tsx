import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import arrow_left from '@/shared/assets/icons/alt_arrow_left.svg';
import arrow_right from '@/shared/assets/icons/alt_arrow_right.svg';

interface Props {
  prevLink: string | null;
  nextLink: string | null;
}

export const QuestionNav = ({ prevLink, nextLink }: Props) => {
  return (
    <div className={styles.questionNav}>
      {prevLink ? (
        <Link className={styles.link} to={prevLink}>
          <img src={arrow_left} alt="Предыдущий" />
          <span className={styles.text}>Предыдущий вопрос</span>
        </Link>
      ) : (
        <button className={styles.button} disabled>
          <img className={styles.disabledImg} src={arrow_left} alt="Нет предыдущего" />
          <span className={styles.text}>Предыдущий вопрос</span>
        </button>
      )}

      {nextLink ? (
        <Link className={styles.link} to={nextLink}>
          <span className={styles.text}>Следующий вопрос</span>
          <img src={arrow_right} alt="Следующий" />
        </Link>
      ) : (
        <button className={styles.button} disabled>
          <span className={styles.text}>Следующий вопрос</span>
          <img className={styles.disabledImg} src={arrow_right} alt="Нет следующего" />
        </button>
      )}
    </div>
  );
};
