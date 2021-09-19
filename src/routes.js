import loadable from '@loadable/component';
import gameHelper from './utils/game.helper';

const Startup = loadable(() => import('./components/pages/startup/Startup'));
const Rules = loadable(() => import('./components/pages/rules/Rules'));
const Game = loadable(() => import('./components/pages/game/Game'));
const Results = loadable(() => import('./components/pages/results/Results'));

export const ROUTE_STARTUP = '/startup';
export const ROUTE_RULES = '/rules';
export const ROUTE_GAME = '/game';
export const ROUTE_RESULTS = '/results';

export const publicRoutes = [
  {
    key: 'home',
    path: '/',
    exact: true,
    redirectTo: ROUTE_STARTUP,
  },
  {
    key: 'startup',
    path: ROUTE_STARTUP,
    component: Startup,
  },
  {
    key: 'rules',
    path: ROUTE_RULES,
    component: Rules,
  },
];

export const privateRoutes = [
  {
    key: 'game',
    path: ROUTE_GAME,
    component: Game,
    guards: [
      {
        mustRedirect: ({ game }) => gameHelper.isEnded(game),
        redirectTo: ROUTE_RESULTS,
      },
    ],
  },
  {
    key: 'results',
    path: ROUTE_RESULTS,
    component: Results,
    guards: [
      {
        mustRedirect: ({ game }) => gameHelper.isRunning(game),
        redirectTo: ROUTE_GAME,
      },
    ],
  },
];
