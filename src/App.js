/// external modules ///
import React from 'react';
import { Route } from "react-router-dom";

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
// import { isSignedIn } from './data/app-states';

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
      exact path={routes.here.FE.path.home}
      component={Home}
      />
      <PrivateRoute
      exact path={routes.here.FE.path.user_account}
      component={UserAccount}
      />
      <Route
      exact path={routes.here.FE.path.user_sign_in}
      render={(props) => (
        <UserSignInForm {...props}
        submit={axioSubmitSignIn}
        handleSuccess={() => {props.history.push(routes.here.FE.path.user_account);}}
        />
      )}
      />
      <Route
      exact path={routes.here.FE.path.user_sign_up}
      render={(props) => (
        <UserSignUpForm {...props}
        submit={axioSubmitSignUp}
        handleSuccess={() => {props.history.push(routes.here.FE.path.user_account);}}
        />
      )}
      />
      {/* <Route exact path={routes.here.FE.path.user_sign_in}>{
        isSignedIn () ? (
          <Redirect to={routes.here.FE.path.user_account}/>
        ) : (
          <UserSignInForm
            submit={axioSubmitSignIn}
            handleSuccess={(history) => {history.push(routes.here.FE.path.user_account);}}
          />
        )
      }</Route> */}
      {/* <Route exact path={routes.here.FE.path.user_sign_up}>{
        isSignedIn () ? (
          <Redirect to={routes.here.FE.path.user_account}/>
        ) : (
          <UserSignUpForm
            submit={axioSubmitSignUp}
            handleSuccess={(history) => {history.push(routes.here.FE.path.user_account);}}
          />
        )
      }</Route> */}
    </div>
  );
}

/**************************************/
export default App;
