import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';// redux-saga 추가
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../rootReducer';
import rootSaga from '../rootSaga';
import { Router } from 'react-router-dom';
import { firebaseApp } from '../config/reduxSagaFirebase';
import { reduxSagaFirebase } from '../config/reduxSagaFirebase';
import { createBrowserHistory } from 'history';

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}


test('회원가입 안 한 사용자의 로그인', async () =>{
  //Given 로그인 하지 않은 사용자가 로그인 페이지에서
  const customHistory = createBrowserHistory();
  const sagaMiddleware = createSagaMiddleware({
  context: {
      history: customHistory
    }
  });
  const store = configureStore({reducer : rootReducer, middleware : [sagaMiddleware]}); //configureStore 적용
  sagaMiddleware.run(rootSaga);
  render(
   <Router history={customHistory}>
    <Provider store={store}>
     <App />
    </Provider>
   </Router>   
  );
  //When 로그인을 하면
  const user = await firebaseApp.auth().signInWithEmailAndPassword('unregister@test.com', 'test123');
  //Then 회원가입 페이지로 이동한다.
  await sleep(1000);
  expect(screen.getAllByText('SignUP'))
});



test('회원가입 한 사용자가 로그인을 하면 메인페이지로 이동한다.', async () =>{
    //Given 로그인 하지 않은 사용자가 로그인 페이지에서
    const customHistory = createBrowserHistory();
    const sagaMiddleware = createSagaMiddleware({
    context: {
        history: customHistory
      }
    });
    const store = configureStore({reducer : rootReducer, middleware : [sagaMiddleware]}); //configureStore 적용
    sagaMiddleware.run(rootSaga);
    render(
     <Router history={customHistory}>
      <Provider store={store}>
       <App />
      </Provider>
     </Router>   
    );
    //When 로그인을 하면
    const serviceUser = await firebaseApp.auth().signInWithEmailAndPassword('register@test.com', 'test123');
    //Then 메인 페이지로 이동한다.
    await sleep(1000);
    expect(screen.getAllByText('mainpage'))

  });