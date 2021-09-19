import { playStatuses } from '../../utils/enums';
import jsonSchemaDataGenerator from './utils/json_schema_data_generator';

export const playSchema = {
  id: 'playSchema',
  properties: {
    id: { type: 'string', faker: 'datatype.uuid' },
    letter: { type: 'string', format: 'letter' },
    playedAt: { type: 'string', format: 'date-time' },
    status: { type: 'string', enum: Object.values(playStatuses) },
  },
  required: ['id', 'letter', 'playedAt', 'status'],
};

export const playsSchema = {
  type: 'array',
  items: {
    $ref: 'playSchema',
  },
  minItems: 1,
  maxItems: 5,
};

async function generatePlay({ initData = {} } = {}) {
  const play = await jsonSchemaDataGenerator.generateAsync(playSchema);

  return Object.assign(play, initData);
}

export default { generatePlay };
