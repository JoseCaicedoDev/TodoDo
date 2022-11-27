import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalCompleted: 0,
  tasksList: [],
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasksList = [...state.tasksList, action.payload]
      state.totalCompleted += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTask } = taskSlice.actions

export default taskSlice.reducer
