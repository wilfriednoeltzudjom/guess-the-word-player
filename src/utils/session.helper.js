import { GAME_SESSION_ID_KEY, GAME_DATA_ID_KEY, GAME_WORD_DEFINITION_ID_KEY } from '../config/constants';
import { isNullish, isValidValue } from './data_validation';

function doesGameSessionExist() {
  return isValidValue(getGameSession());
}

function getGameSession() {
  const gameSession = localStorage.getItem(GAME_SESSION_ID_KEY);

  return gameSession && JSON.parse(gameSession);
}

function setGameSession() {
  localStorage.setItem(GAME_SESSION_ID_KEY, true);
}

function getGameData() {
  const gameData = localStorage.getItem(GAME_DATA_ID_KEY);

  return gameData && JSON.parse(gameData);
}

function setGameData(game) {
  localStorage.setItem(GAME_DATA_ID_KEY, JSON.stringify(game));
}

function startGameSession(game) {
  endGameSession();
  setGameSession();
  setGameData(game);
}

function endGameSession() {
  localStorage.removeItem(GAME_SESSION_ID_KEY);
  localStorage.removeItem(GAME_DATA_ID_KEY);
  localStorage.removeItem(GAME_WORD_DEFINITION_ID_KEY);
}

function setWordDefinitionAsShown() {
  localStorage.setItem(GAME_WORD_DEFINITION_ID_KEY, true);
}

function canShowWordDefintion() {
  const wordDefinitionShown = localStorage.getItem(GAME_WORD_DEFINITION_ID_KEY);

  return isNullish(wordDefinitionShown) || !wordDefinitionShown;
}

export default { doesGameSessionExist, startGameSession, getGameData, setGameData, endGameSession, setWordDefinitionAsShown, canShowWordDefintion };
