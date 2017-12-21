import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';
import '../style/style.css';
import App from './components/App';
import rootReducer from './reducers/reducer';

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxPromise)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('application')
);
