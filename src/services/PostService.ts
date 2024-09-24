import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from "../models/IPost";

const jsonPlaceholder = 'https://jsonplaceholder.typicode.com/';
const jsonServer = 'http://localhost:5000/';

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({ baseUrl: jsonServer }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post'],
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post'],
        })
    }),
});
