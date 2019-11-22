/// external modules ///
import React from 'react';
import { Route , Redirect } from "react-router-dom";

/// internal modules ///
import Home from './pages/Home';
import UserAccount from './pages/UserAccount';
import PrivateRoute from './components/PrivateRoute';
import UserSignInForm from './components/User/UserSignInForm';
import UserSignUpForm from './components/User/UserSignUpForm';
import NavBar from './components/NavBar';
import { axioSubmitSignIn, axioSubmitSignUp } from './actions';

/// app data ///
import { routes } from './data/app-routes';
import { isSignedIn } from './data/app-states';

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
      <PrivateRoute
      exact path='/user/account'
      component={UserAccount}
      />
      {/* <Route
      exact path='/user/sign-in'
      render={(props) => (
        <UserSignInForm {...props}
        submit={axioSubmitSignIn}
        // handleSuccess={() => {props.history.push('/user/account');}}
        />
      )}
      />*/}
      <Route exact path='/user/sign-in'>{
        isSignedIn () ? (
          <Redirect to='/user/account'/>
        ) : (
          <UserSignInForm
            submit={axioSubmitSignIn}
          />
        )
      }</Route>
      {/* <Route
      exact path='/user/sign-up'
      render={(props) => (
        <UserSignUpForm {...props}
        submit={axioSubmitSignUp}
        // handleSuccess={() => {props.history.push('/user/account');}}
        />
      )}
      /> */}
      <Route exact path='/user/sign-up'>{
        isSignedIn () ? (
          <Redirect to='/user/account'/>
        ) : (
          <UserSignUpForm
            submit={axioSubmitSignUp}
          />
        )
      }</Route>
    </div>
  );
}

/**************************************/
export default App;
