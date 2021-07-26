import firebase from 'firebase'
import { all, call, fork, getContext, put, take, takeEvery } from 'redux-saga/effects'
import { reduxSagaFirebase as rsf} from '../config/reduxSagaFirebase';
import { createAction } from '@reduxjs/toolkit';
import { loginFirebase, loginSuccess } from './userSlice';
import '../config/types';
import { instance } from '../config/clientInstance';


const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const GOOGLE_LOGIN = createAction('GOOGLE_LOGIN');
export const FACEBOOK_LOGIN = createAction('FACEBOOK_LOGIN');
export const APPLE_LOGIN = createAction('APPLE_LOGIN');
export const LOGOUT = createAction('LOGOUT');

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
  const history = yield getContext('history');

  while (true) {
    const { user } = yield take(channel); // 로그인시 user객체 로그아웃시 null을 반환한다.
    if (user) {
      yield put(loginFirebase(user));
      const token = yield user.getIdToken();
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      try{
        const response = yield instance.get(`/users/${user.uid}`);
        const serviceUser = response.data; 
        yield put(loginSuccess(serviceUser));
        history.push('/mainpage');

      } catch(err) {
        if (err.response.status === 404){
          history.push('/signup');
        } else {
          alert('로그인 중 문제가 생겼습니다 다시 시도해주세요');
        }
      }
    } 
  }
}

export default function* loginRootSaga() {
  yield fork(loginStatusWatcher);
  yield all([
    takeEvery (GOOGLE_LOGIN.type, googleLogin),
    takeEvery(LOGOUT.type, logout),
  ])
}