import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'
type list = {
  id: 'string'
  title: 'string'
  description: 'string'
}
const url = 'http://localhost:3001/api'

const t = parseCookies()

const headers = new Headers({
  Authorization: `Bearer ${t.token}`,
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
