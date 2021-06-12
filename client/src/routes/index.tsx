import React from 'react';
import { Route, Switch } from 'react-router';
import IndexPage from '../pages/index.page';
import LoginPage from '../pages/login.page';
import RegisterPage from '../pages/register.page';
import PrivateRoute from './private.route';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <PrivateRoute path="/" component={IndexPage} />
    </Switch>
  );
};

export default Routes;
