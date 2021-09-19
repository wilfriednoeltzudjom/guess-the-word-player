import gameFactory from '../game.factory';

describe('factory - game', () => {
  test('should generate a game with all its required properties', async () => {
    const game = await gameFactory.generateGame();

    assertGameHasItsRequiredProperties(game);
  });

  test('should generate a game and override it with the provided properties', async () => {
    const initData = { mode: 'EASY' };
    const game = await gameFactory.generateGame({ initData });

    assertGameHasItsRequiredProperties(game);
    expect(game).toMatchObject(initData);
  });

  function assertGameHasItsRequiredProperties(game) {
    expect(game.id).toBeString();
    expect(game.mode).toBeString();
    expect(game.status).toBeString();
    expect(game.startedAt).toBeString();
    expect(game.endedAt).toBeString();
    expect(game.word).toBeObject();
    expect(game.plays).toBeArray();
  }
});
