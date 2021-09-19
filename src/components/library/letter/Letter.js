import React from 'react';
import PropTypes from 'prop-types';

import { gamePropType } from '../../../utils/prop-types-schemas';
import gameHelper from '../../../utils/game.helper';

import LetterStyled from './Letter.styled';

export function Letter({ className, style = {}, value, game = {} }) {
  return (
    <LetterStyled className={className} style={style} value={value} game={game}>
      <main className={getMainClassName(value, game)}>
        <div className={getFirstDivClassName(game)}></div>
        <div className={getSecondDivClassName(game)}>{gameHelper.canShowValue(value, game) && value}</div>
      </main>
    </LetterStyled>
  );
}
Letter.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
  value: PropTypes.string.isRequired,
  game: gamePropType,
};

function getMainClassName(value, game) {
  return gameHelper.isRunning(game) && gameHelper.hasLetterBeenFound(value, game) ? 'flip' : '';
}

function getFirstDivClassName(game) {
  return gameHelper.isRunning(game) ? 'front' : 'back';
}

function getSecondDivClassName(game) {
  return gameHelper.isRunning(game) ? 'back' : 'front';
}
