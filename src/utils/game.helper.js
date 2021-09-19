import { Game, Play, Word } from '../entities';
import { getRandomArrayItem } from './array.helper';
import { sanitize } from './diacritics';
import dateProcessing from './date_processing';
import { gameStatuses, gameModesTransalations, playStatuses } from './enums';
import links from '../config/links';
import { LABEL_GAME_IN, LABEL_GAME_LOST, LABEL_GAME_TRIES, LABEL_GAME_TRY, LABEL_GAME_WON } from './labels';
import gameSettings from '../config/game-settings';

/** UI */
function canShowValue(value, game) {
  const { status } = game;
  if ([gameStatuses.LOST, gameStatuses.WON].includes(status)) return true;

  return hasLetterBeenFound(value, game);
}

function canShowButtonExit(game) {
  return isRunning(game);
}

function canStartCountDown(game) {
  return isRunning(game) ? true : false;
}

function getKeyboardLetters() {
  return Array.from(Array(26))
    .map((_, index) => index + 65)
    .map((asciiCode) => String.fromCharCode(asciiCode));
}

function extractWordLetters({ word }) {
  return word.value.split('');
}

function getCountDownStart(game) {
  return isRunning(game) ? game.initialTime : game.remainingTime;
}

function getGameResultImageUrl(game) {
  return isEnded(game) ? getRandomArrayItem(links[game.status]) : '';
}

function getGameResultMessage(game) {
  const message = {
    [gameStatuses.WON]: LABEL_GAME_WON,
    [gameStatuses.LOST]: LABEL_GAME_LOST,
  }[game.status];
  if (game.plays.length === 0) return message;

  const messageSuffix = game.plays.length === 1 ? LABEL_GAME_TRY : LABEL_GAME_TRIES;

  return message.concat(` ${LABEL_GAME_IN} ${game.plays.length} `).concat(messageSuffix);
}

/** Core */
function hasLetterBeenFound(letter, game = {}) {
  const { word = {}, plays = [] } = game;

  return word.value?.includes(letter) && plays.some((play) => play.letter === letter);
}

function isRunning(game) {
  return game?.status === gameStatuses.RUNNING;
}

function isEnded(game) {
  return [gameStatuses.WON, gameStatuses.LOST].includes(game?.status);
}

function translateMode({ mode } = {}) {
  return gameModesTransalations[mode].EN;
}

function isLetterAlreadyPlayed(letter, game) {
  const { plays = [] } = game;

  return plays.some((play) => play.letter === letter);
}

function toLetter(character) {
  const result = { letter: '', validLetter: false };
  if (!character) return result;

  const letter = sanitize(character)[0];
  const ascii = letter.charCodeAt(0);
  if (ascii >= 65 && ascii <= 90) result.validLetter = true;

  return { ...result, letter };
}

function getLettersToPlay(word) {
  return [...new Set(word.value.split(''))];
}

function getLettersToNotPlay(word, mode) {
  const keyboardLetters = getKeyboardLetters();
  const lettersToPlay = getLettersToPlay(word);

  return keyboardLetters.filter((letter) => !lettersToPlay.includes(letter)).slice(0, gameSettings.MODE[mode].remainingLives);
}

/**
 * Process play
 * @param {String} letter
 * @param {Object} game
 * @returns
 */
function processPlay(letter, game) {
  const play = Play.newInstance({ letter, status: isPlayCorrect(letter, game) ? playStatuses.CORRECT : playStatuses.INCORRECT }).toJSON();
  const countDownUpdateValue = gameSettings.PLAY[play.status][game.mode];

  return { play, countDownUpdateValue };
}

function isPlayCorrect(letter, game) {
  const letterAlreadyPlayed = game.plays.some((play) => play.letter === letter);

  return game.word.value.includes(letter) && !letterAlreadyPlayed;
}

function initGame(mode, word) {
  return Game.newInstance({ mode, word: Word.fromJSON(word) }).toJSON();
}

/**
 * Object game after play
 * @param {Object} game
 * @param {Object} play
 * @returns
 */
function updateGameAfterPlay(game, play) {
  const gameInstance = Game.fromJSON(game);
  gameInstance.plays.push(Play.fromJSON(play));
  updateGameRemainingLivesAfterPlay(play, gameInstance);
  gameInstance.status = getGameStatus(gameInstance);
  if (isEnded(gameInstance)) setEndedGameProperties(gameInstance);

  return gameInstance.toJSON();
}

function updateGameRemainingLivesAfterPlay(play, game) {
  if (play.status === playStatuses.INCORRECT) {
    game.remainingLives = game.remainingLives - 1;
  }
}

/**
 * Update game after end
 * @param {Object} game
 * @returns
 */
function updateGameAfterEnd(game) {
  const gameInstance = Game.fromJSON(game);
  gameInstance.status = getGameStatus(game, { gameEnded: true });
  setEndedGameProperties(gameInstance);

  return gameInstance.toJSON();
}

function setEndedGameProperties(game) {
  game.endedAt = dateProcessing.toISOString();
}

/**
 * Get game status
 * @param {Object} game
 * @param {Object} options
 * @returns
 */
function getGameStatus(game, { gameEnded = false } = {}) {
  if (haveAllLettersBeenFound(game)) return gameStatuses.WON;
  else if (gameEnded) return gameStatuses.LOST;

  if (game.remainingLives === 0) return gameStatuses.LOST;

  return game.status;
}

function haveAllLettersBeenFound(game) {
  const { word, plays } = game;

  return word.value.split('').every((letter) => plays.some((play) => play.letter === letter));
}

export default {
  canShowValue,
  hasLetterBeenFound,
  isRunning,
  isEnded,
  translateMode,
  canShowButtonExit,
  canStartCountDown,
  extractWordLetters,
  getKeyboardLetters,
  isLetterAlreadyPlayed,
  toLetter,
  initGame,
  updateGameAfterPlay,
  updateGameAfterEnd,
  processPlay,
  getGameStatus,
  getLettersToPlay,
  getLettersToNotPlay,
  getCountDownStart,
  getGameResultImageUrl,
  getGameResultMessage,
};
