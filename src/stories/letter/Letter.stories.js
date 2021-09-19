import React, { useEffect, useState } from 'react';

import { Letter } from '../../components/library';
import { Game, Word, Play } from '../../entities';
import { gameStatuses } from '../../utils/enums';
import dataGeneration from '../../utils/data_generation';

const value = dataGeneration.generateAlpha().toUpperCase();

export default {
  title: 'GuessTheWord/Letter',
  component: Letter,
};

const RunningTemplate = ({ game, ...restArgs }) => {
  const [currentGame, setCurrentGame] = useState(game);
  useEffect(() => {
    setTimeout(() => {
      setCurrentGame((actualGame) => ({
        ...actualGame,
        plays: [{ letter: value }],
      }));
    }, 1500);
  }, []);

  return <Letter {...restArgs} game={currentGame} />;
};

const EndedTemplate = (args) => <Letter {...args} />;

export const Running = RunningTemplate.bind({});
Running.args = {
  value,
  game: Game.newInstance({ status: gameStatuses.RUNNING, word: Word.newInstance({ value: dataGeneration.generateWord().concat(value) }), plays: [] }).toJSON(),
};

export const Found = EndedTemplate.bind({});
Found.args = {
  value,
  game: Game.newInstance({ status: gameStatuses.WON, word: Word.newInstance({ value: dataGeneration.generateWord().concat(value) }), plays: [Play.newInstance({ letter: value })] }).toJSON(),
};

export const NotFound = EndedTemplate.bind({});
NotFound.args = {
  value,
  game: Game.newInstance({ status: gameStatuses.LOST, word: Word.newInstance({ value: dataGeneration.generateWord().concat(value) }), plays: [] }).toJSON(),
};
