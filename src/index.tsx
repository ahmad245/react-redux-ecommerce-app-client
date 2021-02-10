import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import {stroe}from './state'


const composeEnhancers= (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;; 
ReactDOM.render(
  <React.StrictMode>
   <Provider store={stroe}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
