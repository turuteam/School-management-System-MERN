import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "core-js";
import "./polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { icons } from "./assets/icons";
import { Provider } from "react-redux";
import { initFunc } from "./store/apiCall";
import store from "./store/index";
//import axios from "./store/axios";
// import { LoginString } from "./store/localStorage";
// import { loggin, logout } from "./store/slices/userSlice";
// import { setLoading } from "./store/slices/appSlice";
// import {
//   setClasses,
//   setCourses,
//   setDormitories,
//   setCampuses,
//   setSections,
//   setfeesType,
//   setAcademicYear,
//   setStaff,
//   setScholarships,
// } from "./store/slices/schoolSlice";

initFunc();
React.icons = icons;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
serviceWorker.register();
