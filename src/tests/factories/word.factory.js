import { languages } from '../../utils/enums';
import jsonSchemaDataGenerator from './utils/json_schema_data_generator';

export const wordSchema = {
  id: 'wordSchema',
  properties: {
    id: { type: 'string', faker: 'datatype.uuid' },
    value: { type: 'string', format: 'word' },
    definition: {
      type: 'array',
      items: { type: 'string', faker: 'lorem.sentence' },
      minItems: 1,
      maxItems: 5,
    },
    categories: {
      type: 'array',
      items: { type: 'string' },
    },
    language: { type: 'string', enum: Object.values(languages) },
  },
  required: ['id', 'value', 'definition', 'categories', 'language'],
};

async function generateWord({ initData = {} } = {}) {
  const word = await jsonSchemaDataGenerator.generateAsync(wordSchema);
  word.definitions = word.definition;
  delete word.definition;

  return Object.assign(word, initData);
}

export default { generateWord };
