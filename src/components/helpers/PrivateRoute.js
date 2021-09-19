import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import sessionHelper from '../../utils/session.helper';
import { routePropTypes } from '../../utils/prop-types-schemas';
import DelayRedirect from './DelayRedirect';

export default function PrivateRoute({ component, guards = [], ...restOfRouteProps }) {
  const { game } = useSelector((state) => state.gamesState);

  return <Route {...restOfRouteProps} render={(props) => renderPrivateRoute({ component, guards, props, data: { game } })} />;
}

function renderPrivateRoute({ props, component: Component, guards, data = {} }) {
  if (!sessionHelper.doesGameSessionExist()) return <Redirect to="/startup" />;

  const renderComponent = () => <Component {...props} />;

  for (const { mustRedirect, redirectTo } of guards) {
    if (mustRedirect(data)) return <DelayRedirect to={redirectTo} renderBeforeRedirect={renderComponent} />;
  }

  return renderComponent();
}
PrivateRoute.propTypes = routePropTypes;
