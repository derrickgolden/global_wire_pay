import { configureStore } from '@reduxjs/toolkit'
import userDetailsReducer from './userDetails'
import userTransactionsReducer from './transactions'
import allUsersTransactionsReducer from './allUsersTransactions'
import callApiReducer from './callApi'
import userCardDetailsReducer from './userCardDetails'

export const store = configureStore({
  reducer: {
    userDetails: userDetailsReducer, 
    transactionDetails:  userTransactionsReducer,
    allUsersTransactions: allUsersTransactionsReducer,
    callApi: callApiReducer,
    userCardDetails: userCardDetailsReducer
  },
})
