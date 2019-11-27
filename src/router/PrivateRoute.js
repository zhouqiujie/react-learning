import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getLoginState } from 'auth/adalAuth';



const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            getLoginState() ?
                (
                    <Component {...props} />
                ) : (
                    <Redirect to={{
                        pathname: "/intro",
                        state: { from: props.location }
                    }} />
                )
        }></Route>
);

export default PrivateRoute;