import type { Question } from '../../model/types';
import styles from './styles.module.css';

interface Props {
  answer: Question['longAnswer'] | Question['shortAnswer'];
  title?: string;
  withCard?: boolean;
}

export const AnswerQuestion = ({ answer, title, withCard = true }: Props) => {
  return (
    <div className={withCard ? styles.card : ''}>
      {title ? <h1 className={styles.title}>{title}</h1> : ''}
      <div className={styles.answer} dangerouslySetInnerHTML={{ __html: answer }} />
    </div>
  );
};
