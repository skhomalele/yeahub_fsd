import { useGetQuestionsQuery, QuestionCard, type QuestionFilterParams } from '@/entities/question';
import styles from './styles.module.css';
import { Pagination } from '@/features/pagination/ui';
import { QuestionCardSkeleton } from '@/entities/question/ui/QuestionCard/QuestionCardSkeleton';

interface Props {
  params: QuestionFilterParams;
  onPageChange: (page: number) => void;
}

export const QuestionsList = ({ params, onPageChange }: Props) => {
  const { data, isLoading, isError } = useGetQuestionsQuery(params);

  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {[1, 2, 3, 4].map((key) => (
            <QuestionCardSkeleton key={key} />
          ))}
        </div>
      </div>
    );
  }

  if (isError || !data || data.data.length === 0) {
    return <h2>Вопросы не найдены</h2>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {data.data.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            specializationSlug={params.specializationSlug}
          />
        ))}
      </div>

      <Pagination
        countData={data.total}
        currentPage={params.page || 1}
        onChangePage={onPageChange}
      />
    </div>
  );
};
