import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';
import StoreContext, { Provider } from './Redux/StoreContext';

export let rerenderentireTree = (state) => {
  console.log('store', store);
  ReactDOM.render(
    <React.StrictMode>
      <Provider value={store}>
        <App 
          state={state} dispatch={store.dispatch.bind(store)} 
        />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderentireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderentireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
