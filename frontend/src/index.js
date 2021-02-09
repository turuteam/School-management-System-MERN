import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { icons } from './assets/icons'
import { Provider } from 'react-redux'
import store from './store/index'
import {LoginString} from './store/localStorage'
import { loggin, logout } from './store/slices/userSlice';



if(localStorage.getItem(LoginString.ID)){
  store.dispatch(loggin({
    id: localStorage.getItem(LoginString.ID),
    photoUrl: localStorage.getItem(LoginString.PhotoURL),
    email: localStorage.getItem(LoginString.EMAIL),
    name: localStorage.getItem(LoginString.NAME),
    role: localStorage.getItem(LoginString.USERROLE),
    lastName: localStorage.getItem(LoginString.LASTNAME),
    middleName: localStorage.getItem(LoginString.middleName)
  }))
 }
 else{
  store.dispatch(logout())
 }
 


React.icons = icons

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
serviceWorker.register();
