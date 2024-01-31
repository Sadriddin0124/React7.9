import { apiSlice } from "../api/apiSlice";

export const ProductsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder =>({
        getProducts: builder.query({
            query: () => "/products",
            providesTags: ["products"],
          }),
          addProducts: builder.mutation({
            query: (payload) => ({
              url: "/products",
              method: "POST",
              body: payload,
            }),
            invalidatesTags: ["products"],
          }),
          //products update ▼
          updateProducts: builder.mutation({
            query: (payload) => ({
              url: `/products/${payload.id}`,
              method: "PUT",
              body: payload,
            }),
            invalidatesTags: ["products"],
          }),
          //products delete ▼
          deleteProducts: builder.mutation({
            query: (id) => ({
              url: `/products/${id}`,
              method: "DELETE",
            }),
            invalidatesTags: ["products"],
          }),
    })
})

export const {useGetProductsQuery, useAddProductsMutation, useDeleteProductsMutation, useUpdateProductsMutation} = ProductsApiSlice