import React from 'react';
//improt reactDom
import ReactDOM from 'react-dom/client';
//import app.jsx
import App from './App.jsx';
//import SCSS
import './index.scss';

// import store
import { store } from "./store/store.js";
// import provider from react-redux
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
  
);
