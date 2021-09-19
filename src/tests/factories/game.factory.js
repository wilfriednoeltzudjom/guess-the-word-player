import { gameModes, gameStatuses } from '../../utils/enums';
import jsonSchemaDataGenerator from './utils/json_schema_data_generator';
import { playSchema, playsSchema } from './play.factory';
import { wordSchema } from './word.factory';

export const gameSchema = {
  id: 'gameSchema',
  properties: {
    id: { type: 'string', faker: 'datatype.uuid' },
    mode: { type: 'string', enum: Object.values(gameModes) },
    status: { type: 'string', enum: Object.values(gameStatuses) },
    startedAt: { type: 'string', format: 'date-time' },
    endedAt: { type: 'string', format: 'date-time' },
    word: wordSchema,
    plays: playsSchema,
  },
  required: ['id', 'mode', 'status', 'startedAt', 'endedAt', 'word', 'plays'],
};

async function generateGame({ initData = {} } = {}) {
  const game = await jsonSchemaDataGenerator.generateAsync(gameSchema, [playSchema]);

  return Object.assign(game, initData);
}

export default { generateGame };
