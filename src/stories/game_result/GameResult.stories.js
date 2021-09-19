import React from 'react';

import { Game, Play } from '../../entities';
import { gameStatuses } from '../../utils/enums';

import { GameResult } from '../../components/helpers/core/game_result';

export default {
  title: 'GuessTheWord/GameResult',
  component: GameResult,
};

const Template = (args) => <GameResult {...args} />;

export const Won = Template.bind({});
Won.args = {
  game: Game.newInstance({ status: gameStatuses.WON, plays: [Play.newInstance()] }),
};

export const Lost = Template.bind({});
Lost.args = {
  game: Game.newInstance({ status: gameStatuses.LOST, plays: [Play.newInstance()] }),
};
