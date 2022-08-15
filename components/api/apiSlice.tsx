import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQoery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080/auth/sign-in',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})
