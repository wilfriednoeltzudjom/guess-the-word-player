import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { ROUTE_STARTUP } from '../../routes';
import sessionHelper from '../../utils/session.helper';
import gameService from './game.service';
import gameHelper from '../../utils/game.helper';
import { showLoading, hideLoading } from '../ui/loading.slice';

const initialState = {
  game: sessionHelper.getGameData() || {},
};

export const startGame = createAsyncThunk('games/startGame', async function ({ data: { mode } }, { dispatch }) {
  dispatch(showLoading());

  try {
    const { data: word } = await gameService.generateWord();
    const game = gameHelper.initGame(mode, word);
    sessionHelper.startGameSession(game);

    return { game };
  } finally {
    dispatch(hideLoading());
  }
});

export const chooseLetter = createAsyncThunk('games/chooseLetter', function ({ data: { letter, remainingTime }, actions: { stopCountDown, updateCountDown } }, { getState }) {
  const previousGame = getState().gamesState.game;
  const { play, countDownUpdateValue } = gameHelper.processPlay(letter, previousGame);
  updateCountDown(play, countDownUpdateValue);

  const game = gameHelper.updateGameAfterPlay(previousGame, play);
  game.remainingTime = remainingTime;
  sessionHelper.setGameData(game);
  if (gameHelper.isEnded(game)) {
    stopCountDown();
  }

  return { game };
});

export const endGame = createAsyncThunk('games/endGame', function (_, { getState }) {
  const game = gameHelper.updateGameAfterEnd(getState().gamesState.game);
  game.remainingTime = 0;
  sessionHelper.setGameData(game);

  return { game };
});

export const exitGame = createAsyncThunk('games/exitGame', function ({ history }) {
  sessionHelper.endGameSession();

  setTimeout(() => {
    history.push(ROUTE_STARTUP);
  }, 100);
});

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(startGame.pending, (state) => {
      state.game = {};
    });
    builder.addCase(startGame.fulfilled, (state, action) => {
      state.game = action.payload.game;
    });
    builder.addCase(chooseLetter.fulfilled, (state, action) => {
      state.game = action.payload.game;
    });
    builder.addCase(endGame.fulfilled, (state, action) => {
      state.game = action.payload.game;
    });
    builder.addCase(exitGame.fulfilled, (state) => {
      state.game = {};
    });
  },
});

export default gamesSlice.reducer;
