import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const catApi = createApi({
    reducerPath: "catApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api',

    }),
    endpoints: (builder) => ({
        fetchAllCats: builder.query({
            query: () => 'cats'
        })
    })
})




export const {
    useFetchAllCatsQuery
} = catApi