import { configureStore } from '@reduxjs/toolkit'
import userDetailsReducer from './userDetails'
export const store = configureStore({
  reducer: {
    userDetails: userDetailsReducer,  
  },
})
