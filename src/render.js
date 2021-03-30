import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let rerenderentireTree = (props) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={props} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
