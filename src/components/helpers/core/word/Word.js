import React from 'react';

import { TEST_ID_WORD } from '../../../../tests/utils/test-ids';
import gameHelper from '../../../../utils/game.helper';
import { gamePropType } from '../../../../utils/prop-types-schemas';

import { Letter } from '../../../library';
import WordStyled from './Word.styled';

export function Word({ game }) {
  return (
    <WordStyled data-testid={TEST_ID_WORD}>
      {gameHelper.extractWordLetters(game).map((letter, index) => (
        <Letter key={index} value={letter} game={game} />
      ))}
    </WordStyled>
  );
}
Word.propTypes = {
  game: gamePropType,
};
