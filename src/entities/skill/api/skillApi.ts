import { baseApi } from '@/shared/api';
import type { ApiResponse } from '@/shared/api';
import type { Skill } from '../model/types';

export const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<ApiResponse<Skill>, { specializations?: number[] }>({
      query: (params) => ({
        url: 'skills/',
        params,
        keepUnusedDataFor: 300,
      }),
    }),
  }),
});

export const { useGetSkillsQuery } = skillApi;
