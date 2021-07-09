import firebase from 'firebase'
import { all, call, fork, put, take, takeEvery } from 'redux-saga/effects'
import { reduxSagaFirebase as rsf} from '../config/reduxSagaFirebase';
import { createAction } from '@reduxjs/toolkit';


const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const GOOGLE_LOGIN = createAction('GOOGLE_LOGIN');
export const FACEBOOK_LOGIN = createAction('FACEBOOK_LOGIN');
export const APPLE_LOGIN = createAction('APPLE_LOGIN');

function* googleLogin() {
  try {
    yield call(rsf.auth.signInWithPopup, googleAuthProvider);
    // successful login will trigger the loginStatusWatcher, which will update the state
  } catch (error){
      console.log(`login err : ${error}`);
  }
}

function* logout() {
  try {
    yield call(rsf.auth.signOut);
    // successful logout will trigger the loginStatusWatcher, which will update the state
  } catch (error) {
    console.log(`login err : ${error}`);
}
}

function* loginStatusWatcher() {
  // events on this channel fire when the user logs in or logs out
  const channel = yield call(rsf.auth.channel);

  while (true) {
    const { user } = yield take(channel);

    // if (user) yield put(loginSuccess(user))
    // else yield put(logoutSuccess())
  }
}

export default function* loginRootSaga() {
  yield fork(loginStatusWatcher)
  yield all([
    takeEvery (googleLogin),
    takeEvery(logout),
  ])
}