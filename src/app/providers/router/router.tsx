import { createBrowserRouter, Navigate } from 'react-router-dom';

import MainLayout from '@/app/layouts/MainLayout/MainLayout';
import { QuestionsPage } from '@/pages/questions-page';
import { DetailedQuestionPage } from '@/pages/detailed-question';
import { NotFoundPage } from '@/pages/not-found-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="questions/react-frontend-developer" replace /> },
      { path: '*', element: <NotFoundPage /> },
      {
        path: 'questions',
        children: [
          { index: true, element: <Navigate to="react-frontend-developer" replace /> },
          { path: ':specializationSlug', element: <QuestionsPage /> },
          { path: ':specializationSlug/:slug', element: <DetailedQuestionPage /> },
        ],
      },
    ],
  },
]);
