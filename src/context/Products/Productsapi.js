import { api } from '../Api';

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (params) => ({ 
        url: '/products?limit=8', 
        params 
      }),
      providesTags:["Product"]
    }),
    // Post request
    createProduct: build.mutation({
      query: (body)=> ({
        url: "/products",
        method: "POST",
        body
      }),
      invalidatesTags: ["Product"]
    }),
    // Patch request
    updateProduct: build.mutation({
      query: ({_id, body})=> ({
        url: `/products`,
        method: "PATCH",
        body
      }),
      invalidatesTags: ["Product"]
    }),
    // Delete request
    deleteProduct: build.mutation({
      query: (id)=> ({
        url:`/products`,
        method: "DELETE"
      }),
      invalidatesTags: ["Product"]
    })
  }),
})

export const {
  useGetProductsQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation
} = productApi