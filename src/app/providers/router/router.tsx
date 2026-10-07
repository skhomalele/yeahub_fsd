import MainLayout from '@/app/layouts/MainLayout/MainLayout';
import { QuestionsPage } from '@/pages/questions-page';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="questions/react-frontend-developer" replace /> },
      {
        path: 'questions',
        children: [
          { index: true, element: <Navigate to="react-frontend-developer" replace /> },
          { path: ':specializationSlug', element: <QuestionsPage /> },
          //{ path: ':specializationSlug/:slug', element: <DetailedQuestionPage /> },
        ],
      },
    ],
  },
]);
