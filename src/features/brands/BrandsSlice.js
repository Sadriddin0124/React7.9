import { apiSlice } from "../api/apiSlice";

export const BrandsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getBrands: builder.query({
            query: () => "/brands",
            providesTags: ["brands"],
          }),
          //brands post ▼
    addBrands: builder.mutation({
        query: (payload) => ({
          url: `/brands`,
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["brands"],
      }),
      //brands put ▼
      updateBrands: builder.mutation({
        query: (payload) => ({
          url: `/brands/${payload.id}`,
          method: "PUT",
          body: payload,
        }),
        invalidatesTags: ["brands"],
      }),
      //brands delete ▼
      deleteBrands: builder.mutation({
        query: (id) => ({
          url: `/brands/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["brands"],
      }),
    })
})

export const {useAddBrandsMutation, useDeleteBrandsMutation, useGetBrandsQuery, useUpdateBrandsMutation} = BrandsApiSlice