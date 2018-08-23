import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const thunkMiddleware = (_ref) => {
  const dispatch = _ref.dispatch;
  const getState = _ref.getState;

  return function (next) {
    return function (action) {
      return typeof action === 'function' ? action(dispatch, getState) : next(action);
    };
  };
}

const store = applyMiddleware(thunkMiddleware)(createStore)(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
