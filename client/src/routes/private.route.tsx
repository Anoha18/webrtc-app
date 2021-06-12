import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';
import { AppState } from '../store/types';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>,
  rest?: RouteProps
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, rest }, context) => {
  const user = useSelector((state: AppState) => state.user.user);
  
  return (
    <Route
      {...rest}
      render={props => user ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )}
    />
  );
}

export default PrivateRoute;
