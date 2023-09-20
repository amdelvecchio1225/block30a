import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const strangersThingsApi = createApi({
    reducerPath: 'strangersThingsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT'}),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query:() => 'posts'
        }),
        getPostsById: builder.query({
            query: (id) => 'posts/$:{id}'
        })
    }),
})

export const {useGetPostByIdQuery, userGetPostQuery} = strangersThingsApi