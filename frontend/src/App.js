import React from 'react';
import {  BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './scss/style.scss';
import { useSelector} from 'react-redux';
import {selectUser} from './store/slices/userSlice';
import {SignedOutRoutes, SignedInRoutes} from './ProtectedRoutes'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./layouts/index'));
//const Layout = React.lazy(() => import('./containers/Layout/Layout'));

// Pages
const Login = React.lazy(() => import('./pages/login/Login'));
const Page404 = React.lazy(() => import('./pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));


function App() {
  const user = useSelector(selectUser);
  
    return (
     <Router>
       <ToastContainer/>
          <React.Suspense fallback={loading}>
            <Switch>
                   {/* <SignedInRoutes
                      isAuth={user} 
                      exact={true}
                      path={`/${user?.role}`} 
                      name="Dashboard" 
                      Component={TheLayout} /> */}
                    <SignedOutRoutes 
                      isAuth={user} 
                      exact={true}
                      path="/login" 
                      name="Login Page" 
                      component={Login} />
                      <Route  
                        path="/500" 
                        exact
                        name="Page 500" 
                        render={props => <Page500 {...props}/>} />
                      <Route  
                        path="/404" 
                        exact={true}
                        name="Page 404" 
                        render={props => <Page404 {...props}/>} />
                        <SignedInRoutes
                            isAuth={user} 
                            path="/" 
                            name="Home" 
                            // render={props => <TheLayout {...props}/>} /> 
                           Component={TheLayout} /> 
                     {/* <Route path="/" name="Home" render={props => <Layout {...props}/>} /> */}
                      <Redirect path="/" to={`/${user?.role}`}/>
                       
            </Switch>
          </React.Suspense>
         </Router>
    
    );
  
}

export default App;
