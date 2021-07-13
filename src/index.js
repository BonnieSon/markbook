import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';// redux-saga 추가
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { createBrowserHistory } from 'history';
import { Router} from 'react-router-dom';


const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory
  }
});
const store = configureStore({reducer : rootReducer, middleware : [sagaMiddleware]}); //configureStore 적용
sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <React.StrictMode>
   <Router history={customHistory}>
    <Provider store={store}>
     <App />
    </Provider>
   </Router>   
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
