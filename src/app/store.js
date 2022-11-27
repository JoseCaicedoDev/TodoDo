import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../reducers/users/userSlice'
import taskReducer from '../reducers/tasks/taskSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
})
