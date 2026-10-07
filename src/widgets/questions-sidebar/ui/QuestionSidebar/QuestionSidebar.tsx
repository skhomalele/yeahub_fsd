import { TagGroup, Tag, Stats } from '@/shared/ui';
import type { Question } from '@/entities/question';

import styles from './styles.module.css';

interface Props {
  question: Question;
}

export const QuestionSidebar = ({ question }: Props) => {
  if (!question) return null;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.group}>
        <p className={styles.title}>Оценка:</p>
        <div className={styles.statsRow}>
          <Stats stats={question.rate} title="Рейтинг" />
          <Stats stats={question.complexity} title="Сложность" />
        </div>
      </div>

      {question.questionSkills?.length > 0 && (
        <TagGroup title="Навыки" items={question.questionSkills} limit={10}>
          {(skill) => <Tag key={skill.id} title={skill.title} isPurple />}
        </TagGroup>
      )}

      {question.keywords?.length > 0 && (
        <div className={styles.group}>
          <p className={styles.title}>Ключевые слова</p>
          <div className={styles.keywords}>
            {question.keywords.map((keyword, index) => (
              <span className={styles.keyword} key={index}>
                #{keyword}
              </span>
            ))}
          </div>
        </div>
      )}

      {question.createdBy?.username && (
        <div className={styles.authorSection}>
          <span className={styles.authorLabel}>Автор:</span>
          <span className={styles.authorName}>{question.createdBy.username}</span>
        </div>
      )}
    </aside>
  );
};
