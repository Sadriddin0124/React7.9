import { apiSlice } from "../api/apiSlice";

export const ModelsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getModels: builder.query({
            query: () => "/models",
            providesTags: ["models"],
          }),
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
    })
})

export const {useAddModelsMutation, useDeleteModelsMutation, useGetModelsQuery, useUpdateModelsMutation} = ModelsApiSlice