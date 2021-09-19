import React from 'react';

import { WordDefinition } from '../../components/helpers/core';
import { Game, Word } from '../../entities';
import dataGeneration from '../../utils/data_generation';

export default {
  title: 'GuessTheWord/WordDefinition',
  component: WordDefinition,
};

const Template = (args) => <WordDefinition {...args} />;

export const Default = Template.bind({});
Default.args = {
  game: Game.newInstance({ word: Word.newInstance({ definitions: [dataGeneration.generateSentence()] }) }),
};
