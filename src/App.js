/// external modules ///
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

/// internal modules ///
import Home from './pages/Home';
import About from './pages/About';
import UserAccount from './pages/UserAccount';
import UserSignOut from './pages/UserSignOut';
import PrivateRoute from './components/PrivateRoute';
import FormikUserSignInForm from './components/User/UserSignInForm';
import FormikUserSignUpForm from './components/User/UserSignUpForm';
import NavBar from './components/NavBar'

/// styles ///
import './styles/App.css';

/***************************************
  COMPONENT
***************************************/
function App () {
  return (
    <div className='App'>
      <NavBar />
        <Route
          exact path='/'
          component={Home}
        />
        <Route
          exact path='/about'
          component={About}
        />
        <PrivateRoute
            exact path='/user/account'
            component={UserAccount}
        />
        <Route
          exact path='/user/sign-in'
          render={props => <FormikUserSignInForm {...props} />}
        />
        <Route
          exact path='/user/sign-up'
          render={props => <FormikUserSignUpForm {...props} />}
        />
    </div>
  );
}
export default App;
