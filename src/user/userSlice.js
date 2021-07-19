import { createSlice } from '@reduxjs/toolkit';
import '../config/types';



export const userSlice = createSlice({
  name: 'user',
  initialState: {
    /**
     * @type {User}
    */
    user : null,    

  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
  }
})

export const { loginSuccess } = userSlice.actions;
export default userSlice.reducer;
