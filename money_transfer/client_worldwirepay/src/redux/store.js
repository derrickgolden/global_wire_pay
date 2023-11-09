import { configureStore } from '@reduxjs/toolkit'
import userDetailsReducer from './userDetails'
import userTransactionsReducer from './transactions'
export const store = configureStore({
  reducer: {
    userDetails: userDetailsReducer, 
    transactionDetails:  userTransactionsReducer,
  },
})
