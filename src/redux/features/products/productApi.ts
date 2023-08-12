import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/books`,
      providesTags: ['post'],
    }),
    searchBookTitle: builder.query({
      query: (text) => `/booksNameSearch/${text}`,
    }),
    singleProduct: builder.query({
      query: (id) => `/books/${id}`,
    }),

    postProduct: builder.mutation({
      query: (data) => ({
        url: `/books`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['post'],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['post'],
    }),

    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comment'],
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['comment'],
    }),
  }),
});
export const {
  useGetCommentQuery,
  useGetProductsQuery,
  usePostCommentMutation,
  useSingleProductQuery,
  usePostProductMutation,
  useSearchBookTitleQuery,
  useUpdateProductMutation,
} = productApi;
