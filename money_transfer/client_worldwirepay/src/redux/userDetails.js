import { createSlice } from '@reduxjs/toolkit';

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: {
    user_id: "",
    first_name: "",
    last_name: "",
    balance: 0.00,
    total_deposit : 0, 
    total_withdraw : 0, 
  },
  reducers: {
    setUserDetails: (state, action) => {
      const { user_id, first_name, last_name, total_deposit, total_withdraw, balance } = action.payload || {};
      if (user_id !== undefined) state.user_id = user_id;
      if (first_name !== undefined) state.first_name = first_name;
      if (last_name !== undefined) state.last_name = last_name;
      if (balance !== undefined) state.balance = balance;
      if (total_deposit !== undefined) state.total_deposit = total_deposit;
      if (total_withdraw !== undefined) state.total_withdraw = total_withdraw;
    }
  }  
});

// Action creators for signup details
export const { setUserDetails } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
