import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import {
  QuestionHeader,
  QuestionHeaderSkeleton,
  QuestionAnswerSkeleton,
  useGetQuestionBySlugQuery,
  QuestionAnswer,
} from '@/entities/question';
import { QuestionNavigation } from '@/features/question-navigation';
import { QuestionSidebar } from '@/widgets/questions-sidebar';
import { SecondaryColumn, MobileDrawer, MentorCard, QuestionNavSkeleton } from '@/shared/ui';
import { getQuestionsRoute } from '@/shared/config/routes';

import caret_left from '@/shared/assets/icons/caret_left.svg';
import styles from './styles.module.css';

export const DetailedQuestionPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { specializationSlug, slug } = useParams<{ specializationSlug: string; slug: string }>();

  const backUrl = getQuestionsRoute(specializationSlug);

  const {
    data: question,
    isLoading,
    isError,
  } = useGetQuestionBySlugQuery(slug || '', {
    skip: !slug,
  });

  if (isError) {
    return (
      <div className="container">
        <p>Ошибка загрузки вопроса</p>
        <Link to={backUrl} className={styles.backButton}>
          <img src={caret_left} alt="caret_left" />
          Назад к списку
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link className={styles.backButton} to={backUrl}>
        <img src={caret_left} alt="caret_left" />
        Назад к списку
      </Link>

      <div className="wrapper">
        <div className={styles.leftColumn}>
          {isLoading || !question ? (
            <>
              <QuestionHeaderSkeleton />
              <QuestionNavSkeleton />
              <QuestionAnswerSkeleton />
              <QuestionAnswerSkeleton />
            </>
          ) : (
            <>
              <QuestionHeader
                title={question.title}
                description={question.description}
                onOpenMeta={() => setIsDrawerOpen(true)}
              />

              <QuestionNavigation />

              <QuestionAnswer answer={question.shortAnswer} title="Краткий ответ" />
              {question.longAnswer && (
                <QuestionAnswer answer={question.longAnswer} title="Развернутый ответ" />
              )}
            </>
          )}

          <div className={styles.mentorMobileOnly}>
            <MentorCard />
          </div>
        </div>

        <div className={styles.desktopOnly}>
          <SecondaryColumn>
            {!isLoading && question && <QuestionSidebar question={question} />}
            <MentorCard />
          </SecondaryColumn>
        </div>

        <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          {!isLoading && question && <QuestionSidebar question={question} />}
        </MobileDrawer>
      </div>
    </div>
  );
};
