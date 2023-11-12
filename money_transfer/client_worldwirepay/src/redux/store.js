import { configureStore } from '@reduxjs/toolkit'
import userDetailsReducer from './userDetails'
import userTransactionsReducer from './transactions'
import allUsersTransactionsReducer from './allUsersTransactions'
export const store = configureStore({
  reducer: {
    userDetails: userDetailsReducer, 
    transactionDetails:  userTransactionsReducer,
    allUsersTransactions: allUsersTransactionsReducer
  },
})
