export const getQuestionsRoute = (specializationSlug?: string) =>
  specializationSlug ? `/questions/${specializationSlug}` : '/questions';

export const getQuestionDetailRoute = (specializationSlug: string, questionSlug: string) =>
  `/questions/${specializationSlug}/${questionSlug}`;
