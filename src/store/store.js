import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../common/slice/appSlice'

export const store = configureStore({
  reducer: {
    app: appReducer
  }
})
