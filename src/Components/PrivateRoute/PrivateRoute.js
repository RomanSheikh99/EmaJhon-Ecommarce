import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    console.log(user);
    if (loading) {
        return <div>
            <h1>Data Is Loading</h1>
            <h5>Please Wait Few Second</h5>
        </div>
    }
    else {
        return (
            <Route
            {...rest}
            render={({ location }) => user?.email ? children : <Redirect
                to={{
                    pathname: "/register",
                    state: { from: location }
                }}
            ></Redirect>
    
            }
        >
    
        </Route>
        );
}
};

export default PrivateRoute;