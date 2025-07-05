import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const borrowApi = createApi({
    reducerPath: 'borrowApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://assignment-03-weld.vercel.app/api' }),
    // import.meta.env.VITE_API_URL
    tagTypes: ["borrow"],

    endpoints: (builder) => ({

        getBorrowSummary: builder.query({
            query: () => `/borrow`,
            providesTags: ["borrow"]
        }),

         borrowBook: builder.mutation({
            query: (borrowData) => ({
                url: "/borrow",
                method: "POST",
                body: borrowData,
            }),
            invalidatesTags: ["borrow"]
        }),
    })
})

export const { useGetBorrowSummaryQuery, useBorrowBookMutation}=borrowApi;