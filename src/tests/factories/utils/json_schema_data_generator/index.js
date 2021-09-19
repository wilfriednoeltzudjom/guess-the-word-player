import jsf from 'json-schema-faker';

import dataGeneration from '../../../../utils/data_generation';

jsf.extend('faker', () => require('faker'));
jsf.format('word', generateWord);
jsf.format('letter', generateLetter);

function generateWord() {
  return dataGeneration
    .generateWord()
    .replace(/[- ]|\d/g, '')
    .trim()
    .toUpperCase();
}

function generateLetter() {
  return dataGeneration.generateAlpha();
}

async function generateAsync(schema, refs = []) {
  return jsf.resolve(schema, refs);
}

export default { generateAsync };
