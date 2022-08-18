import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { parseCookies } from 'nookies'

const url = 'http://localhost:3001/api'

const t = parseCookies()

export const ListTodo = createApi({
  reducerPath: 'ListTodo',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getListTodo: builder.query({
      query: () => ({
        url: `/lists/`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${t.token}`,
        },
      }),
      providesTags: () => ['Todo'],
    }),
    AddList: builder.mutation({
      query: (body) => ({
        url: `/lists/`,
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${t.token}`,
        },
      }),
      invalidatesTags: () => ['Todo'],
    }),
  }),
})

export const { useGetListTodoQuery, useAddListMutation } = ListTodo
