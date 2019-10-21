import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import App from './component/app/app';
import App from './component/router/app';
// import MostStarRepo from './component/axjs/mostStarRepo';
// import App from './component/new-search/app';
let root = document.querySelector('#root');
// ReactDOM.render(<MostStarRepo></MostStarRepo>, root);
// ReactDOM.render(<App />, root);
// ReactDOM.render(<App></App>, root);
ReactDOM.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
  document.getElementById('root')
);
