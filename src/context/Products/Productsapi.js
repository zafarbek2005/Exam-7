import { api } from '../Api';

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({

    getProducts: build.query({
      query: (params) => ({ 
        url: '/products',
        params: { ...params, limit: 8 },
      }),
      providesTags: ["Product"],
    }),
    getDetailProduct: build.query({
      query: (id) => ({ 
        url: `/products/${id}`, 
      }),
      providesTags: (result, error, id) => [{ type: 'Product', id }],
    }),

    createProduct: build.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),

    updateProduct: build.mutation({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Product', id }],
    }),
    
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Product', id }],
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetDetailProductQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation
} = productApi;
