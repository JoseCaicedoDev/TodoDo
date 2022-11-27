import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  email: '',
  firstName: '',
  lastName: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      ;(state.email = action.payload.email),
        (state.firstName = action.payload.firstName),
        (state.lastName = action.payload.lastName),
        (state.id = action.payload.id)
    },
    unsetUser: (state) => {
      ;(state.email = ''), (state.firstName = ''), (state.lastName = ''), (state.id = 0)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, unsetUser } = userSlice.actions

export default userSlice.reducer
