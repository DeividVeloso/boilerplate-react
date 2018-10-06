import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import PrivateRoute from './PrivateRoute';
import Screen from 'pages/components/Screen';

import Home from 'pages/Home';
import Books from 'pages/Books';

const CustomRoute = ({ component: Component, type: RouteType, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <div>
        <CssBaseline />
        <RouteType>
          <Screen title={rest.title}>
            <Component {...props} />
          </Screen>
        </RouteType>
      </div>
    )}
  />
);

const Routes = () => (
  <Switch>
    <CustomRoute
      exact
      path="/"
      //type={PrivateRoute}
      component={Home}
      title="Estudos"
    />

    <CustomRoute
      exact
      path="/books"
      //type={PrivateRoute}
      component={Books}
      title="Livros"
    />

    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
