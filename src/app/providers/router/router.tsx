import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import { useGetQuestionsQuery, QuestionCard } from '@/entities/question';

const QuestionsPreview = () => {
  const { data, isLoading, isError } = useGetQuestionsQuery();

  if (isLoading) {
    return <div style={{ padding: 32 }}>Загрузка карточек...</div>;
  }

  if (isError || !data) {
    return <div style={{ padding: 32 }}>Ошибка загрузки вопросов</div>;
  }

  return (
    <div style={{ maxWidth: 840, margin: '40px auto', padding: '0 20px' }}>
      <h2 style={{ marginBottom: 24, fontSize: 24, fontWeight: 700 }}>Вопросы React, JavaScript</h2>

      {data.data.slice(0, 5).map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <QuestionsPreview />,
      },
    ],
  },
]);
