import { createSlice } from '@reduxjs/toolkit';

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: {
    user_id: "",
    first_name: "",
    last_name: "",
    balance: 0.00,
    last_received: 0.00,
    payouts: 0.00,
  },
  reducers: {
    setUserDetails: (state, action) => {
      const { user_id, first_name, last_name, balance, last_received, payouts } = action.payload || {};
      if (user_id !== undefined) state.user_id = user_id;
      if (first_name !== undefined) state.first_name = first_name;
      if (last_name !== undefined) state.last_name = last_name;
      if (balance !== undefined) state.balance = balance;
      if (last_received !== undefined) state.last_received = last_received;
      if (payouts !== undefined) state.payouts = payouts;
    }
  }  
});

// Action creators for signup details
export const { setUserDetails } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
