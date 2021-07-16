import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user : null,    
  },
  reducers: {
    loginSuccess: (state, action) {
      state.user = action.payload;
    },
  }
})

/*
const a = {
  b : "c"
};

const b = a.b;
const { b } = a;
*/
// export const loginSucces = userSlice.actions.loginSuccess;
export const { loginSuccess } = userSlice.actions;
export default userSlice.reducer;

// const loginSuccess = createAction('LOGIN_SUCCESS');
/*
function reducer (initialState, action){
  switch(action.type  === 'LOGIN_SUCCESS'){
    state.user = action.payload;
  }
}

yield put(loginSuccess(user))
dispatch(loginSuccess(user));
*/
