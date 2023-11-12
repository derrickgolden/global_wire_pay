import { createSlice } from '@reduxjs/toolkit';

const allUsersTransactionsSlice = createSlice({
  name: 'allUsersTransactions',
  initialState: [],
  reducers: {
    setAllUsersTransactions: (state, action) => {
        if(action.payload?.length){
            return action.payload
        }
        return state
    }
  }  
});

// Action creators for signup details
export const { setAllUsersTransactions } = allUsersTransactionsSlice.actions;

export default allUsersTransactionsSlice.reducer;
