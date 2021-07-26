import { call, put, all, getContext, takeLatest, select } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { instance } from '../config/clientInstance';
import { loginSuccess } from './userSlice';


export const register = createAction('REGISTER');


function* registerUser(action) {
  console.log(JSON.stringify(action.payload));
  const registerData = action.payload;
  // user를 서버에 추가  (먼저는 데이터 형테를 맞춰줘야하다.)
  // 1. uid를 firebase User에서 가져오기 
  const state = yield select();
  const firebaseUser = state.user.firebaseUser;

  registerData['id'] = firebaseUser.uid;
  // TODO: 파일업로드 배우고 처리 
  registerData['avatarImg'] = '';

  // '/users'
  yield instance.post('/users', registerData );

  // user정보를 가져옴 로그인 성공 이벤트 발생 
  const response = yield instance.get(`/users/${firebaseUser.uid}`);
  const user = response.data;
  yield put(loginSuccess(user));

  // 메인페이지 이동 
  const history = yield getContext('history');
  history.push('/mainpage');
}

export default function* signUprootSaga() {
  yield all([
    takeLatest (register.type, registerUser),
  ]);
}