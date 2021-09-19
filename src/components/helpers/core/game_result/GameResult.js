import React, { memo } from 'react';

import gameHelper from '../../../../utils/game.helper';
import { gamePropType } from '../../../../utils/prop-types-schemas';

import { Text } from '../../../library';
import GameResultStyled from './GameResult.styled';

function UnMemorizedGameResult({ game }) {
  return (
    <GameResultStyled>
      <img src={gameHelper.getGameResultImageUrl(game)} alt="Game result image" />
      <Text size="xl" weight="bold">
        {gameHelper.getGameResultMessage(game)}
      </Text>
    </GameResultStyled>
  );
}

export const GameResult = memo(UnMemorizedGameResult);
GameResult.propTypes = {
  game: gamePropType.isRequired,
};
