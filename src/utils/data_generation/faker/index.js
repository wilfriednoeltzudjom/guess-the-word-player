import faker from 'faker';

function generateAlpha() {
  return faker.random.alpha();
}

function generateWord() {
  return faker.random.word();
}

function generateSentence() {
  return faker.lorem.sentence();
}

export default { generateAlpha, generateWord, generateSentence };
