import { baseApi } from '@/shared/api';
import type { ApiResponse } from '@/shared/api';
import type { Question, QuestionFilterParams } from '../model/types';

export const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<ApiResponse<Question>, QuestionFilterParams | void>({
      query: (params) => ({
        url: 'questions/public-questions',
        params: params || undefined,
        keepUnusedDataFor: 300,
      }),
      providesTags: ['Questions'],
    }),

    getQuestionBySlug: builder.query<Question, string>({
      query: (slug) => `questions/public-questions/${slug}`,
      providesTags: ['Question'],
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionBySlugQuery } = questionApi;
