import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom'
import ReduxPromise from 'redux-promise';
import '../style/importer.scss';
import App from './components/App';
import rootReducer from './reducers/reducer';

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxPromise)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  </Provider>
  , document.getElementById('application')
);
