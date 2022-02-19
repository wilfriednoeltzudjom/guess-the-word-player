import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { publicRoutes, privateRoutes } from '../routes';

import AppStyled from './App.styled';
import PublicRoute from './helpers/PublicRoute';
import PrivateRoute from './helpers/PrivateRoute';
import { Loading } from './library';
import AppUnsupported from './AppUnsupported';
import useWindowDimensions from './hooks/useWindowDimensions';

function App() {
  const { width } = useWindowDimensions();

  const loadingState = useSelector((state) => state.loadingState);

  return canShowAppContent(width) ? (
    <>
      <AppStyled>
        <Router>
          <Switch>
            {renderPublicRoutes()}
            {renderPrivateRoutes()}
          </Switch>
        </Router>
      </AppStyled>

      <Loading shown={loadingState.shown} />
    </>
  ) : (
    <AppUnsupported />
  );
}

function renderPublicRoutes() {
  return publicRoutes.map(({ key, ...restProps }) => <PublicRoute key={key} {...restProps} />);
}
function renderPrivateRoutes() {
  return privateRoutes.map(({ key, ...restProps }) => <PrivateRoute key={key} {...restProps} />);
}

function canShowAppContent(width) {
  return width > 1200;
}

export default App;
