import { languages } from '../../../utils/enums';
import wordFactory from '../word.factory';

describe('factory - word', () => {
  test('should generate a word with all its required properties', async () => {
    const word = await wordFactory.generateWord();

    assertWordHasItsDefaultProperties(word);
  });

  test('should generate word and override it with the provided properties', async () => {
    const initData = { value: 'Provided value' };
    const word = await wordFactory.generateWord({ initData });

    assertWordHasItsDefaultProperties(word);
    expect(word).toMatchObject(initData);
  });

  function assertWordHasItsDefaultProperties(word) {
    expect(word.id).toBeString();
    expect(word.value).toBeString();
    expect(word.definitions).toBeArray();
    expect(word.categories).toBeArray();
    expect(languages).toContainKey(word.language);
  }
});
