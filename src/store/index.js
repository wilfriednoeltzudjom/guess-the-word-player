import { configureStore } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';

import gamesReducer from './games/games.slice';
import loadingReducer from './ui/loading.slice';

export function initStore({ preloadedState = {} } = {}) {
  const middlewares = [];
  if (process.env.NODE_ENV === 'development') middlewares.push(reduxLogger);

  return configureStore({
    reducer: {
      gamesState: gamesReducer,
      loadingState: loadingReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
    preloadedState,
  });
}
