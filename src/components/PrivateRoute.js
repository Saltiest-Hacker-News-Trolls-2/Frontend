/// external imports ///
import React from 'react';
import { Route, Redirect } from 'react-router';

const isAuth = () => {
    return localStorage.getItem('isLoggedIn') ? true : false;
}
export default function PrivateRoute({ children, ...rest }) {
    return(
        <Route
            {...rest}
            render={({ location }) => 
                isAuth() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/user/sign-in',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}
