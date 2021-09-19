import PropTypes from 'prop-types';

import { languages } from './enums';

export const routePropTypes = {
  path: PropTypes.string,
  component: PropTypes.elementType,
};

export const colorSchemePropType = PropTypes.oneOf(['primary', 'secondary']);

export const wordPropType = PropTypes.shape({
  id: PropTypes.string,
  value: PropTypes.string,
  definition: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  language: PropTypes.oneOf(Object.values(languages)),
});

export const playPropType = PropTypes.shape({
  id: PropTypes.string,
  letter: PropTypes.string,
  playedAt: PropTypes.string,
  status: PropTypes.string,
});

export const gamePropType = PropTypes.shape({
  id: PropTypes.string,
  mode: PropTypes.string,
  status: PropTypes.string,
  startedAt: PropTypes.string,
  endedAt: PropTypes.string,
  word: wordPropType,
  plays: PropTypes.arrayOf(playPropType),
});
