import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    //products get ▼
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["products"],
    }),
    //brands get ▼
    getBrands: builder.query({
      query: () => "/brands",
      providesTags: ["brands"],
    }),
    //models get ▼
    getModels: builder.query({
      query: () => "/models",
      providesTags: ["models"],
    }),
    //products add ▼
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
    //models post ▼
    addModels: builder.mutation({
      query: (payload) => ({
        url: `/models`,
        method: "POST",
        body: payload
      }),
      invalidatesTags: ["models"],
    }),
    updateModels: builder.mutation({
      query: (payload) => ({
        url: `/models/${payload.id}`,
        method: "PUT",
        body: payload
      }),
      invalidatesTags: ["models"],
    }),
    deleteModels: builder.mutation({
      query: (id) => ({
        url: `/models/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["models"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetBrandsQuery,
  useGetModelsQuery,
  useAddProductsMutation,
  useUpdateProductsMutation,
  useDeleteProductsMutation,
  useAddBrandsMutation,
  useUpdateBrandsMutation,
  useDeleteBrandsMutation,
  useAddModelsMutation,
  useDeleteModelsMutation,
  useUpdateModelsMutation
} = api;
