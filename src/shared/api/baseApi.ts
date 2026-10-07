import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENV } from '../config/env';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ENV.API_URL,
  }),
  tagTypes: ['Questions', 'Question', 'Specializations', 'Skills'],
  endpoints: () => ({}),
});
