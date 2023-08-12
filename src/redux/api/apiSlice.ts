import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://book-catalogue-rho.vercel.app',
  }),

  tagTypes: ['comment', 'post'],

  endpoints: () => ({}),
});
