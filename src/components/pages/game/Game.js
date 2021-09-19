import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { chooseLetter, endGame, exitGame } from '../../../store/games/games.slice';
import { isNonEmptyObject } from '../../../utils/data_validation';
import gameHelper from '../../../utils/game.helper';
import { playStatuses } from '../../../utils/enums';

import { Container, Navbar } from '../../helpers/layout';
import { Keyboard, Word, WordDefinition } from '../../helpers/core';
import useCountDown from '../../hooks/useCountDown';
import GameStyled from './Game.styled';
import sessionHelper from '../../../utils/session.helper';

function Game() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { game } = useSelector((state) => state.gamesState);
  const { countDownRef, incrementCount, decrementCount, stopCountDown, getCurrentCount } = useCountDown();

  useEffect(() => {
    function handleKeyDown(evt) {
      const { validLetter, letter } = gameHelper.toLetter(evt.key);
      if (validLetter) handlePlay(letter);
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function handleCountExpired() {
    stopCountDown();
    dispatch(endGame({ history }));
  }

  function handleExit() {
    stopCountDown();
    dispatch(exitGame({ history }));
  }

  function updateCountDown(play, updateValue) {
    const countDownUpdateStrategies = {
      [playStatuses.CORRECT]: incrementCount,
      [playStatuses.INCORRECT]: decrementCount,
    };
    countDownUpdateStrategies[play.status](updateValue);
  }

  function handlePlay(letter) {
    dispatch(chooseLetter({ data: { letter, remainingTime: getCurrentCount() }, actions: { stopCountDown, updateCountDown }, history }));
  }

  return isNonEmptyObject(game) ? (
    <Container navbar={<Navbar game={game} countDownRef={countDownRef} onCountExpired={handleCountExpired} onExit={handleExit} />}>
      <GameStyled>
        {sessionHelper.canShowWordDefintion() && <WordDefinition game={game} onWordDefinitonShown={sessionHelper.setWordDefinitionAsShown} />}

        <Word game={game} />

        <Keyboard game={game} onPlay={handlePlay} />
      </GameStyled>
    </Container>
  ) : (
    <></>
  );
}

export default Game;
