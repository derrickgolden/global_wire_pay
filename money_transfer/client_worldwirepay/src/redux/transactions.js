import { createSlice } from '@reduxjs/toolkit';

const transactionsSlice = createSlice({
  name: 'transactionDetails',
  initialState: [],
  reducers: {
    setTransactions: (state, action) => {
      if (action.payload.length) state = action.payload;
    }
  }  
});

// Action creators for signup details
export const { setTransactions } = transactionsSlice.actions;

export default transactionsSlice.reducer;
