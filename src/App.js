/// external modules ///
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

/// internal modules ///
import Home from './pages/Home';
import About from './pages/About';
import UserAccount from './pages/UserAccount';
import UserSignIn from './pages/UserSignIn';
import UserSignUp from './pages/UserSignUp';
import PrivateRoute from './components/PrivateRoute';

/// styles ///
import './styles/App.css';

/***************************************
  COMPONENT
***************************************/
function App () {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/user/account'>Account</Link>
          </li>
          <li>
            <Link to='/user/sign-in'>Sign In</Link>
          </li>
          <li>
            <Link to='/user/sign-up'>Sign Up</Link>
          </li>
        </ul>
        <Switch>
          <Route
            exact path='/'
            component={Home}
          />
          <Route
            exact path='/about'
            component={About}
          />
          <PrivateRoute path='/user/account'>
            <Route
              exact path='/user/account'
              component={UserAccount}
            />
          </PrivateRoute>
          <Route
            exact path='/user/sign-in'
            component={UserSignIn}
          />
          <Route
            exact path='/user/sign-up'
            component={UserSignUp}
          />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

/**************************************/
export default App;
