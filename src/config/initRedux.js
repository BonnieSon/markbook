import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../rootReducer';
import rootSaga from '../rootSaga';
import { createBrowserHistory } from 'history';

export const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory
  }
});
export const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware] }); //configureStore 적용

sagaMiddleware.run(rootSaga);
