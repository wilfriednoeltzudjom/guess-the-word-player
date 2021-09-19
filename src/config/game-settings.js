import { gameModes, playStatuses } from '../utils/enums';

export default {
  MODE: {
    [gameModes.EASY]: { remainingLives: 7, remainingTime: 30 },
    [gameModes.MEDIUM]: { remainingLives: 5, remainingTime: 20 },
    [gameModes.HARD]: { remainingLives: 3, remainingTime: 15 },
  },
  PLAY: {
    [playStatuses.INCORRECT]: {
      [gameModes.EASY]: 1,
      [gameModes.MEDIUM]: 2,
      [gameModes.HARD]: 2,
    },
    [playStatuses.CORRECT]: {
      [gameModes.EASY]: 3,
      [gameModes.MEDIUM]: 3,
      [gameModes.HARD]: 2,
    },
  },
};
