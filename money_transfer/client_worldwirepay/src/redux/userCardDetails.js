import { createSlice } from '@reduxjs/toolkit';

const userCardDetailsSlice = createSlice({
  name: 'userCardDetails',
  initialState: [],
  reducers: {
    setUserCardDetails: (state, action) => {
        return action.payload;
    }
  }  
});

// Action creators for signup details
export const { setUserCardDetails } = userCardDetailsSlice.actions;

export default userCardDetailsSlice.reducer;
