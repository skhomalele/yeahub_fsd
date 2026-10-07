import { baseApi } from '@/shared/api';
import type { ApiResponse } from '@/shared/api';
import type { Specialization } from '../model/types';

export const specializationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<ApiResponse<Specialization>, void>({
      query: () => ({
        url: 'specializations/',
        keepUnusedDataFor: 300,
      }),
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationApi;
