import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoaderOpen: false,
  searchText: null
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    onLoaderOpen: (state, action) => {
      state.isLoaderOpen = action.payload
    },

    onSetSearchText: (state, action) => {
      state.searchText = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { onLoaderOpen, onSetSearchText } = appSlice.actions

export default appSlice.reducer
