import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import sessionHelper from '../../utils/session.helper';
import { routePropTypes } from '../../utils/prop-types-schemas';

export default function PublicRoute({ path, redirectTo, component: Component, ...restOfRouteProps }) {
  return (
    <Route
      path={path}
      {...restOfRouteProps}
      render={(props) => {
        if (redirectTo) return <Redirect to={redirectTo} />;

        return sessionHelper.doesGameSessionExist() ? <Redirect to="/game" /> : <Component {...props} />;
      }}
    />
  );
}
PublicRoute.propTypes = routePropTypes;
