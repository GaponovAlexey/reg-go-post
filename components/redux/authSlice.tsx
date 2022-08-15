import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCreDentials: (state, { payload }) => {
      const { user, token } = payload
      state.user = user
      state.token = token
    },
    Logout: (state, { payload }) => {
      state.user = null
      state.token = null
    },
  },
})

export const { setCreDentials, Logout } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: any) => state.auth.user
export const selectCurrentToken = (state: any) => state.auth.token
