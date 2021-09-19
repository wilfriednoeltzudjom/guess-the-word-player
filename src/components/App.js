import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { publicRoutes, privateRoutes } from '../routes';

import AppStyled from './App.styled';
import PublicRoute from './helpers/PublicRoute';
import PrivateRoute from './helpers/PrivateRoute';
import { Loading } from './library';

function App() {
  const loadingState = useSelector((state) => state.loadingState);

  return (
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
  );
}

function renderPublicRoutes() {
  return publicRoutes.map(({ key, ...restProps }) => <PublicRoute key={key} {...restProps} />);
}
function renderPrivateRoutes() {
  return privateRoutes.map(({ key, ...restProps }) => <PrivateRoute key={key} {...restProps} />);
}

export default App;
