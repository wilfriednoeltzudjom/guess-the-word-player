import idGeneration from '../utils/id_generation';
import dateProcessing from '../utils/date_processing';
import { gameStatuses } from '../utils/enums';
import Word from './word';
import Play from './play';
import gameSettings from '../config/game-settings';

export default class Game {
  id;
  mode;
  status;
  initialTime;
  initialLives;
  remainingLives;
  remainingTime;
  startedAt;
  endedAt;
  word;
  plays;

  constructor(id, mode, status, remainingLives, remainingTime, startedAt, endedAt, word, plays) {
    this.id = id;
    this.mode = mode;
    this.status = status;
    this.remainingLives = remainingLives;
    this.remainingTime = remainingTime;
    this.startedAt = startedAt;
    this.endedAt = endedAt;
    this.word = word;
    this.plays = plays;
  }

  toJSON() {
    return {
      id: this.id,
      mode: this.mode,
      status: this.status,
      initialLives: this.initialLives,
      initialTime: this.initialTime,
      remainingLives: this.remainingLives,
      remainingTime: this.remainingTime,
      startedAt: this.startedAt,
      endedAt: this.endedAt,
      word: this.word instanceof Word ? this.word.toJSON() : {},
      plays: this.plays ? this.plays.map((play) => play.toJSON()) : [],
    };
  }

  static newInstance({ id = idGeneration.generateId(), mode, status = gameStatuses.RUNNING, startedAt = dateProcessing.toISOString(), endedAt, word, plays } = {}) {
    const selectedSettings = gameSettings.MODE[mode] || {};
    const gameInstance = new Game(id, mode, status, selectedSettings.remainingLives, selectedSettings.remainingTime, startedAt, endedAt, word, plays);
    gameInstance.initialTime = gameInstance.remainingTime;
    gameInstance.initialLives = gameInstance.remainingLives;

    return gameInstance;
  }

  static fromJSON({ id, mode, status, initialTime, initialLives, remainingLives, remainingTime, startedAt, endedAt, word, plays }) {
    const wordInstance = word ? Word.fromJSON(word) : {};
    const playsInstances = plays ? plays.map((play) => Play.fromJSON(play)) : [];
    const gameInstance = new Game(id, mode, status, remainingLives, remainingTime, startedAt, endedAt, wordInstance, playsInstances);
    if (initialTime) gameInstance.initialTime = initialTime;
    if (initialLives) gameInstance.initialLives = initialLives;

    return gameInstance;
  }
}

// function getGameConfig(mode) {
//   const config = {
//     [gameModes.EASY]: { remainingLives: 7, remainingTime: 12 },
//     [gameModes.MEDIUM]: { remainingLives: 5, remainingTime: 8 },
//     [gameModes.HARD]: { remainingLives: 3, remainingTime: 5 },
//   };

//   return config[mode] || {};
// }
