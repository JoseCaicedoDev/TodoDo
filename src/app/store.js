import { configureStore } from '@reduxjs/toolkit'

import useReducer from '../reducers/users/userSlice.js'
export const store = configureStore({
  reducer: {
    user: useReducer,
  },
})
