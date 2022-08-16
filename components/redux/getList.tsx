import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useEffect } from 'react'
type list = {
  id: 'string'
  title: 'string'
  description: 'string'
}
const url = 'http://localhost:3001/api'

if (typeof window !== 'undefined') {}
// const t = localStorage.getItem('token')

const headers = new Headers({
  // Authorization: `Bearer ${t}`,
})

export const ListTodo = createApi({
  reducerPath: 'ListTodo',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getListTodo: builder.query({
      query: () => ({
        url: `/lists/`,
        method: 'GET',
        headers,
      }),
    }),
  }),
})

export const { useGetListTodoQuery } = ListTodo
