import idGeneration from '../utils/id_generation';

export default class Word {
  id;
  value;
  definition;
  categories;
  language;

  constructor(id, value, definitions, categories, language) {
    this.id = id;
    this.value = value;
    this.definitions = definitions;
    this.categories = categories;
    this.language = language;
  }

  toJSON() {
    return {
      id: this.id,
      value: this.value,
      definitions: this.definitions,
      categories: this.categories,
      language: this.language,
    };
  }

  static newInstance({ id = idGeneration.generateId(), value, definitions, categories = [], language } = {}) {
    return new Word(id, value, definitions, categories, language);
  }

  static fromJSON({ id, value, definitions, categories, language }) {
    return new Word(id, value, definitions, categories, language);
  }
}
