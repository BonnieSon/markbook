import { all, getContext, takeEvery } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';


export const register = createAction('REGISTER');

function* registerUser(action) {
  console.log(JSON.stringify(action));
  const history = yield getContext('history');

  history.push('/mainpage');
}

export default function* signUprootSaga() {
  yield all([
    takeEvery (register.type, registerUser),
  ]);
}