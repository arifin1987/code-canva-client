import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["laptop"],

  endpoints: (builder) => ({
    getLaptops: builder.query({
      query: () => ({
        url: "/laptops",
        method: "GET",
      }),
      providesTags: ["laptop"],
    }),
    addLaptops: builder.mutation({
      query: (data) => ({
        url: "/laptops",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["laptop"],
    }),
    updateLaptops: builder.mutation({
      query: (options) => ({
        url: `/laptops/${options.id}`,
        method: "PUT",
        body: options.data,
      }),
      invalidatesTags: ["laptop"],
    }),
    deleteLaptops: builder.mutation({
      query: (id) => ({
        url: `/laptops/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["laptop"],
    }),
    getCarts: builder.query({
      query: () => ({
        url: "/laptops",
        method: "GET",
      }),
      providesTags: ["laptop"],
    }),
  }),
});

export const { useAddLaptopsMutation, useUpdateLaptopsMutation } = baseApi;
