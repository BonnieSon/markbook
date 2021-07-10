import { all, call, delay, put, takeEvery } from 'redux-saga/effects'
import loginRootSaga from './user/loginSaga'

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(loginRootSaga),
   ])
}