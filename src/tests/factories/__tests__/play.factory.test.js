import { playStatuses } from '../../../utils/enums';
import playFactory from '../play.factory';

describe('factory - play', () => {
  test('should generate a play with all its required properties', async () => {
    const play = await playFactory.generatePlay();

    assertPlayHasItsRequiredProperties(play);
  });

  test('should generate a play an override it with the provided properties', async () => {
    const initData = { letter: 'A' };
    const play = await playFactory.generatePlay({ initData });

    assertPlayHasItsRequiredProperties(play);
    expect(play).toMatchObject(initData);
  });

  function assertPlayHasItsRequiredProperties(play) {
    expect(play.id).toBeString();
    expect(play.letter).toBeString();
    expect(play.playedAt).toBeString();
    expect(playStatuses).toContainKey(play.status);
  }
});
