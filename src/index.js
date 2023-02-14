import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
// import store from './store/store';
// import store from './store/cart/store';
import { Provider } from 'react-redux';
// import stores from './store/redux/stores';
import store from './store/store';
// import store


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
);
