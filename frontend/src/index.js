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
import axios from './store/axios'
import {LoginString} from './store/localStorage'
import { loggin, logout } from './store/slices/userSlice';
import {setLoading} from './store/slices/appSlice'
import {setClasses, 
        setCourses, 
        setDormitories, 
        setCampuses, 
        setSections,
        setfeesType, 
        setAcademicYear,
        setStaff,
        setScholarships} from './store/slices/schoolSlice';




if(localStorage.getItem(LoginString.ID)){
  store.dispatch(loggin({
    id: localStorage.getItem(LoginString?.ID || ""),
    photoUrl: localStorage.getItem(LoginString?.PhotoURL || ""),
    email: localStorage.getItem(LoginString?.EMAIL || ""),
    name: localStorage.getItem(LoginString?.NAME || ""),
    role: localStorage.getItem(LoginString?.USERROLE || ""),
    lastName: localStorage.getItem(LoginString?.LASTNAME || ""),
    middleName: localStorage.getItem(LoginString?.middleName || "")
  }))
  store.dispatch(setLoading(true))
   axios.get('/classes').then(res => {
       store.dispatch(setClasses(res?.data));
   })
   axios.get('/sections').then(res => {
    store.dispatch(setSections(res?.data));
})
   axios.get('/courses').then(res => {
     store.dispatch(setCourses(res?.data))
   })
   axios.get('/scholarships').then(res => {
    store.dispatch(setScholarships(res?.data))
  })
   axios.get('/campuses').then(res => {
     store.dispatch(setCampuses(res?.data))
   })
   axios.get('/dormitories').then(res => {
    store.dispatch(setDormitories(res?.data))
  })
  axios.get('/fees/types').then(res => {
    store.dispatch(setfeesType(res?.data))
  })
  axios.get('/academicyear/admin').then(res => {
    store.dispatch(setAcademicYear(res?.data))
  })
  axios.get('/teachers').then(res => {
    store.dispatch(setStaff(res?.data))
  })

 }
 else{
  store.dispatch(logout())
 }
 store.dispatch(setLoading(false))

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
