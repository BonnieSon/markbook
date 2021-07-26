import { createSlice } from '@reduxjs/toolkit';
import '../config/types';



export const userSlice = createSlice({
  name: 'user',
  initialState: {
    /**
     * @type {User}
    */
    user : null,
    firebaseUser : null,    

  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    loginFirebase: (state, action) => {
      state.firebaseUser = action.payload;
    }
  }
})

export const { loginSuccess, loginFirebase } = userSlice.actions;
export default userSlice.reducer;
