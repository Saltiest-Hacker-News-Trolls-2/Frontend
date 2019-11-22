/// external imports ///
import React from 'react';
import { Route, Redirect } from 'react-router';

/// app data ///
import { routes } from '../data/app-routes';
import { isSignedIn } from '../data/app-states';

///
const isAuth = isSignedIn;

export default function PrivateRoute({ children, ...rest }) {
  return (
    <Route
    {...rest}
    render={({ location }) => (
      isAuth() ? (
        children
      ) : (
        <Redirect
        to={{
          pathname: routes.here.FE.path.user_sign_in,
          state: { from: location }
        }}
        />
      )
    )}
    />
  );
}
