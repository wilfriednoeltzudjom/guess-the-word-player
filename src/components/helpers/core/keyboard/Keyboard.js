import React from 'react';
import PropTypes from 'prop-types';

import { TEST_ID_KEYBOARD } from '../../../../tests/utils/test-ids';
import { gamePropType } from '../../../../utils/prop-types-schemas';
import gameHelper from '../../../../utils/game.helper';

import { Button } from '../../../library';
import KeyboardStyled from './Keyboard.styled';

export function Keyboard({ game, onPlay }) {
  return (
    <KeyboardStyled className="keyboard" data-testid={TEST_ID_KEYBOARD}>
      {gameHelper.getKeyboardLetters().map((letter, index) => (
        <Button key={index} shape="square" disabled={gameHelper.isLetterAlreadyPlayed(letter, game)} onClick={() => onPlay(letter)}>
          {letter}
        </Button>
      ))}
    </KeyboardStyled>
  );
}
Keyboard.propTypes = {
  game: gamePropType.isRequired,
  onPlay: PropTypes.func.isRequired,
};
