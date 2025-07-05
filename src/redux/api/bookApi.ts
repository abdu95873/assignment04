import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://assignment-03-weld.vercel.app/api' }),
    tagTypes: ["book"],

    endpoints: (builder) => ({


        getAllBook: builder.query({
            query: () => `/books`,
            providesTags: ["book"]
        }),

        getSingleBook: builder.query({
            query: (id) => `/books/${id}`,
            providesTags: ["book"]

        }),

        addBook: builder.mutation({
            query: (bookData) => ({
                url: "/books",
                method: "POST",
                body: bookData,
            }),
            invalidatesTags: ["book"]
        }),
        updateBook: builder.mutation({
            query: ({ id, payload }) => ({
                url: `/books/${id}`,
                method: "PATCH",
                body: payload,
            }),
            invalidatesTags: ["book"]

        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",

            }),
            invalidatesTags: ["book"]

        })
    }),
})

export const { useGetAllBookQuery, useGetSingleBookQuery, useAddBookMutation, useUpdateBookMutation, useDeleteBookMutation } = bookApi;