import { sanitizeHtml } from '@/shared/lib/utils/sanitizeHtml';

import type { Question } from '../../model/types';

import styles from './styles.module.css';

interface Props {
  answer: Question['longAnswer'] | Question['shortAnswer'];
  title?: string;
  withCard?: boolean;
}

export const QuestionAnswer = ({ answer, title, withCard = true }: Props) => {
  const safeHtml = sanitizeHtml(answer);

  return (
    <div className={withCard ? styles.card : ''}>
      {title ? <h1 className={styles.title}>{title}</h1> : null}
      <div className={styles.answer} dangerouslySetInnerHTML={{ __html: safeHtml }} />
    </div>
  );
};
