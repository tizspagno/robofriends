import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cardlist from './Cardlist';
import {robots} from './robots'; // robots.js is not not exporting default, so we have to do destructuring
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <header className="container"></header>
    <div className="container">
      <Cardlist robots={robots} />
  </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
