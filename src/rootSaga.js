import { all, call, delay, put, takeEvery } from 'redux-saga/effects';
import loginRootSaga from './user/loginSaga';
import signUprootSaga from './user/signUpSaga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(loginRootSaga),
    call(signUprootSaga),
   ])
}