//index
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import reducer from 'reducer';

const store = legacy_createStore(reducer)
function Display(){
  return(
    <Provider store={store}>
    <App />
  </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Display/>);

